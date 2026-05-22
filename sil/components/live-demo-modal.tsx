"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, ComposedChart,
} from "recharts"

const COLORS = {
  crimson: "#C41E3A", crimsonDark: "#A01530", crimsonLight: "#E8485E",
  navy: "#1B3A6B", navyLight: "#2E5FA3", navyDark: "#0F2347",
  bg: "#F4F6FA", card: "#FFFFFF", border: "#DDE3EF",
  text: "#1A1A2E", textMuted: "#6B7A99", textLight: "#8E9BBF",
  accent1: "#C87D2A", accent2: "#D4580A", accent3: "#5AC189",
  accent4: "#3CCCCB", accent5: "#A868B7",
  parCurrent: "#1B3A6B", par1: "#C87D2A", par30: "#D4580A",
  par60: "#C03800", par90: "#A02000", par180: "#C41E3A",
}

const PIE_COLORS = [COLORS.navy, COLORS.crimson, COLORS.accent1, COLORS.accent3, COLORS.accent5, COLORS.accent4]

const BRANCHES = ["Head Office", "Lusaka Branch", "Kitwe Branch", "Ndola Branch", "Livingstone Branch"]
const OFFICERS = ["James Phiri", "Grace Mwanza", "David Banda", "Faith Tembo", "Peter Mulenga", "Ruth Chilufya"]
const CURRENCIES = ["ZMW", "USD"]
const PRODUCTS = ["Group Loan", "Individual Loan", "SME Loan", "Agricultural Loan"]
const MONTHS = ["Jul 2025","Aug 2025","Sep 2025","Oct 2025","Nov 2025","Dec 2025","Jan 2026","Feb 2026","Mar 2026","Apr 2026"]
const AGE_BANDS = ["1. Under 25", "2. 25-34", "3. 35-44", "4. 45-54", "5. 55+"]
const PAR_BUCKETS = ["Current", "1 - PAR1-29", "2 - PAR30", "3 - PAR60", "4 - PAR90", "5 - PAR180+"]

const seed = (s: number) => { let v = s; return () => { v = (v * 16807 + 0) % 2147483647; return (v - 1) / 2147483646 } }
const rng = seed(42)
const rand = (min: number, max: number) => Math.floor(rng() * (max - min + 1)) + min

const portfolioTrend = MONTHS.map((m, i) => ({ month: m, portfolio: 2800000 + i * 320000 + rand(-80000, 80000), loans: 420 + i * 35 + rand(-10, 10) }))
const disbCollMonthly = MONTHS.map((m) => ({ month: m, disbursed: rand(350000, 850000), collected: rand(280000, 650000), loansDisbursed: rand(25, 75) }))
const parByBranch = BRANCHES.map(b => ({ name: b, par30: rand(50000, 250000), par90: rand(20000, 120000), current: rand(400000, 900000) }))
const parByOfficer = OFFICERS.map(o => ({ name: o, portfolio: rand(300000, 800000), par30: rand(10000, 120000), par30Rate: +(rand(2, 18) + rng() * 5).toFixed(1) }))
const officerScorecard = OFFICERS.map(o => ({ name: o, activeLoans: rand(40, 120), clients: rand(35, 100), portfolio: rand(300000, 900000), collected: rand(80000, 350000), par30Rate: +(rand(2, 18)).toFixed(1), collectionRate: +(rand(55, 95)).toFixed(1) }))
const clientGrowth = MONTHS.map((m, i) => ({ month: m, total: 1200 + i * 85 + rand(-15, 15), newClients: rand(35, 95), exited: rand(5, 25) }))
const genderDist = [{ name: "Female", value: 58 }, { name: "Male", value: 40 }, { name: "Other", value: 2 }]
const ageDist = AGE_BANDS.map(a => ({ name: a, count: rand(80, 350) }))
const clientsByBranch = BRANCHES.map(b => ({ name: b, clients: rand(120, 480) }))
const parAgingBuckets = [{ bucket: "Current", amount: 3200000 }, { bucket: "1-29 Days", amount: 420000 }, { bucket: "30-59 Days", amount: 280000 }, { bucket: "60-89 Days", amount: 150000 }, { bucket: "90-179 Days", amount: 95000 }, { bucket: "180+ Days", amount: 65000 }]
const collectionsBreakdown = MONTHS.map(m => ({ month: m, principal: rand(150000, 400000), interest: rand(40000, 120000), fees: rand(5000, 25000) }))
const portfolioByCurrency = [{ name: "ZMW", value: 5200000 }, { name: "USD", value: 890000 }]
const disbByBranch = BRANCHES.map(b => ({ name: b, disbursed: rand(300000, 900000) }))
const activeLoansByBranch = BRANCHES.map(b => ({ name: b, loans: rand(60, 220) }))
const delinquentLoans = Array.from({ length: 20 }, (_, i) => ({
  id: `LN-${2000 + i}`,
  client: ["M. Banda","J. Phiri","S. Mwale","C. Tembo","L. Zulu","N. Mumba","K. Chanda","P. Sakala","R. Mbewe","E. Lungu","T. Ngoma","B. Mutale","H. Bwalya","D. Chipili","A. Kaluba","F. Musonda","G. Kachinga","W. Siame","Y. Mwansa","I. Nkonde"][i],
  branch: BRANCHES[i % 5], officer: OFFICERS[i % 6],
  daysArrears: rand(5, 300), outstanding: rand(2000, 45000),
  bucket: PAR_BUCKETS[Math.min(5, Math.floor(i / 3.5))],
}))

// ─── PRIMITIVES ────────────────────────────────────────────────
const KPICard = ({ label, value, sub, trend, color = COLORS.crimson, icon }: { label: string; value: string; sub?: string; trend?: number; color?: string; icon?: string }) => (
  <div style={{ background: COLORS.card, borderRadius: 12, padding: "24px 28px", border: `1px solid ${COLORS.border}`, boxShadow: "0 2px 12px rgba(27,58,107,0.07)", position: "relative", overflow: "hidden", minWidth: 0 }}>
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${color}, ${COLORS.navy})` }} />
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
      {icon && <span style={{ fontSize: 18, opacity: 0.7 }}>{icon}</span>}
      <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, color: COLORS.textMuted }}>{label}</span>
    </div>
    <div style={{ fontSize: 32, fontWeight: 800, color, letterSpacing: -1, lineHeight: 1.1 }}>{value}</div>
    {sub && <div style={{ fontSize: 12, color: COLORS.textMuted, marginTop: 4 }}>{sub}</div>}
    {trend !== undefined && (
      <div style={{ marginTop: 6, fontSize: 12, fontWeight: 600, color: trend >= 0 ? COLORS.accent3 : COLORS.crimson }}>
        {trend >= 0 ? "▲" : "▼"} {Math.abs(trend)}% vs last month
      </div>
    )}
  </div>
)

const ChartCard = ({ title, children, height = 320 }: { title: string; children: React.ReactNode; height?: number }) => (
  <div style={{ background: COLORS.card, borderRadius: 12, border: `1px solid ${COLORS.border}`, boxShadow: "0 2px 12px rgba(27,58,107,0.07)", padding: "20px 24px", minWidth: 0, overflow: "hidden" }}>
    <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.text, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 3, height: 16, borderRadius: 2, background: COLORS.crimson }} />
      {title}
    </div>
    <div style={{ height }}>{children}</div>
  </div>
)

const FilterSelect = ({ label, options, value, onChange, icon }: { label: string; options: string[]; value: string; onChange: (v: string) => void; icon?: string }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 130 }}>
    <label style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.8, color: COLORS.textMuted }}>{icon} {label}</label>
    <select value={value} onChange={e => onChange(e.target.value)} style={{ padding: "7px 10px", borderRadius: 6, border: `1px solid ${COLORS.border}`, background: COLORS.bg, color: COLORS.text, fontSize: 12, fontWeight: 500, outline: "none", cursor: "pointer" }}>
      <option value="all">All</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
)

const FilterBar = ({ filters, values, onChange }: { filters: { key: string; label: string; icon?: string; options: string[] }[]; values: Record<string, string>; onChange: (v: Record<string, string>) => void }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "end", padding: "14px 20px", background: COLORS.card, borderRadius: 10, border: `1px solid ${COLORS.border}`, borderLeft: `3px solid ${COLORS.crimson}`, marginBottom: 20, boxShadow: "0 1px 6px rgba(27,58,107,0.05)" }}>
    <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.navy, marginRight: 4, alignSelf: "center", whiteSpace: "nowrap" }}>FILTERS</div>
    {filters.map(f => (
      <FilterSelect key={f.key} label={f.label} options={f.options} icon={f.icon} value={values[f.key] || "all"} onChange={v => onChange({ ...values, [f.key]: v })} />
    ))}
    <button onClick={() => onChange({})} style={{ padding: "7px 16px", borderRadius: 6, background: COLORS.crimson, color: "#fff", border: "none", fontSize: 11, fontWeight: 600, cursor: "pointer", letterSpacing: 0.5, alignSelf: "end" }}>RESET</button>
  </div>
)

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number | string; color?: string }[]; label?: string }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: "rgba(26,26,46,0.95)", borderRadius: 8, padding: "10px 14px", border: `1px solid ${COLORS.crimson}` }}>
      <div style={{ color: "#fff", fontSize: 11, fontWeight: 700, marginBottom: 6 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color || "#ccc", fontSize: 11, display: "flex", gap: 8, justifyContent: "space-between" }}>
          <span>{p.name}:</span>
          <span style={{ fontWeight: 700 }}>{typeof p.value === "number" ? p.value.toLocaleString() : p.value}</span>
        </div>
      ))}
    </div>
  )
}

const fmt = (n: number) => {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `${(n / 1e3).toFixed(0)}K`
  return n.toLocaleString()
}

const DataTable = ({ columns, data, maxH = 280 }: { columns: { key: string; label: string; align?: string; bold?: boolean; render?: (v: any, row: any) => React.ReactNode }[]; data: any[]; maxH?: number }) => (
  <div style={{ overflow: "auto", maxHeight: maxH, borderRadius: 8, border: `1px solid ${COLORS.border}` }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
      <thead>
        <tr>{columns.map(c => (
          <th key={c.key} style={{ background: COLORS.navy, color: "#fff", padding: "10px 12px", fontWeight: 700, fontSize: 10, textTransform: "uppercase", letterSpacing: 0.6, textAlign: (c.align || "left") as any, position: "sticky", top: 0, zIndex: 1 }}>{c.label}</th>
        ))}</tr>
      </thead>
      <tbody>{data.map((row, ri) => (
        <tr key={ri} style={{ background: ri % 2 === 0 ? "#FAFBFE" : "#fff" }}>
          {columns.map(c => (
            <td key={c.key} style={{ padding: "8px 12px", borderBottom: `1px solid ${COLORS.border}`, color: COLORS.text, textAlign: (c.align || "left") as any, fontWeight: c.bold ? 600 : 400, whiteSpace: "nowrap" }}>
              {c.render ? c.render(row[c.key], row) : row[c.key]}
            </td>
          ))}
        </tr>
      ))}</tbody>
    </table>
  </div>
)

// ─── DASHBOARDS ────────────────────────────────────────────────
const ExecDashboard = () => {
  const [filters, setFilters] = useState<Record<string, string>>({})
  const filterDefs = [
    { key: "currency", label: "Currency", icon: "💱", options: CURRENCIES },
    { key: "branch", label: "Branch", icon: "🏢", options: BRANCHES },
    { key: "officer", label: "Officer", icon: "👤", options: OFFICERS },
    { key: "product", label: "Product", icon: "📦", options: PRODUCTS },
  ]
  return (
    <div>
      <FilterBar filters={filterDefs} values={filters} onChange={setFilters} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 }}>
        <KPICard icon="👥" label="Total Active Clients" value="2,847" sub="Across all branches" trend={4.2} />
        <KPICard icon="💼" label="Portfolio Outstanding" value="K 6.09M" sub="ZMW equivalent" trend={8.1} color={COLORS.navy} />
        <KPICard icon="⚠️" label="PAR30 Ratio" value="7.24%" sub="Target: < 5%" trend={-1.3} color={COLORS.accent2} />
        <KPICard icon="📋" label="Active Loan Accounts" value="1,634" sub="300 status loans" trend={5.7} color={COLORS.accent3} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 16 }}>
        <ChartCard title="Portfolio Growth Trend" height={280}>
          <ResponsiveContainer>
            <AreaChart data={portfolioTrend}>
              <defs>
                <linearGradient id="pgGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS.navy} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={COLORS.navy} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: COLORS.textMuted }} />
              <YAxis tickFormatter={fmt} tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="portfolio" stroke={COLORS.navy} strokeWidth={2.5} fill="url(#pgGrad)" name="Portfolio (K)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Portfolio by Currency" height={280}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={portfolioByCurrency} cx="50%" cy="45%" outerRadius={90} innerRadius={50} dataKey="value" paddingAngle={3} stroke="none">
                {portfolioByCurrency.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <ChartCard title="Disbursements by Branch" height={240}>
          <ResponsiveContainer>
            <BarChart data={disbByBranch} layout="vertical" barSize={18}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} horizontal={false} />
              <XAxis type="number" tickFormatter={fmt} tick={{ fontSize: 10, fill: COLORS.textMuted }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: COLORS.textMuted }} width={110} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="disbursed" fill={COLORS.navy} radius={[0, 4, 4, 0]} name="Disbursed (K)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Active Loans by Branch" height={240}>
          <ResponsiveContainer>
            <BarChart data={activeLoansByBranch} layout="vertical" barSize={18}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: COLORS.textMuted }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: COLORS.textMuted }} width={110} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="loans" fill={COLORS.crimson} radius={[0, 4, 4, 0]} name="Active Loans" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  )
}

const PARDashboard = () => {
  const [filters, setFilters] = useState<Record<string, string>>({})
  const filterDefs = [
    { key: "currency", label: "Currency", icon: "💱", options: CURRENCIES },
    { key: "branch", label: "Branch", icon: "🏢", options: BRANCHES },
    { key: "officer", label: "Officer", icon: "👤", options: OFFICERS },
    { key: "bucket", label: "PAR Bucket", icon: "⚠️", options: PAR_BUCKETS },
  ]
  const bucketColors = [COLORS.parCurrent, COLORS.par1, COLORS.par30, COLORS.par60, COLORS.par90, COLORS.par180]
  return (
    <div>
      <FilterBar filters={filterDefs} values={filters} onChange={setFilters} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 20 }}>
        <KPICard icon="⚠️" label="PAR30 Portfolio" value="K 441K" sub="Loans > 30 days overdue" color={COLORS.accent2} />
        <KPICard icon="🔴" label="PAR90 Portfolio" value="K 160K" sub="Loans > 90 days overdue" color={COLORS.par90} />
        <ChartCard title="PAR Aging Buckets" height={130}>
          <ResponsiveContainer>
            <BarChart data={parAgingBuckets} barSize={22}>
              <XAxis dataKey="bucket" tick={{ fontSize: 9, fill: COLORS.textMuted }} />
              <YAxis tickFormatter={fmt} tick={{ fontSize: 9, fill: COLORS.textMuted }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="amount" name="Amount (K)" radius={[4, 4, 0, 0]}>
                {parAgingBuckets.map((_, i) => <Cell key={i} fill={bucketColors[i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <ChartCard title="PAR Portfolio by Officer" height={280}>
          <ResponsiveContainer>
            <BarChart data={parByOfficer} barSize={20}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
              <XAxis dataKey="name" tick={{ fontSize: 9, fill: COLORS.textMuted }} />
              <YAxis tickFormatter={fmt} tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="portfolio" fill={COLORS.navy} name="Total Portfolio" radius={[3, 3, 0, 0]} />
              <Bar dataKey="par30" fill={COLORS.crimson} name="PAR30 Amount" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="PAR by Branch" height={280}>
          <ResponsiveContainer>
            <BarChart data={parByBranch} layout="vertical" barSize={14}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} horizontal={false} />
              <XAxis type="number" tickFormatter={fmt} tick={{ fontSize: 10, fill: COLORS.textMuted }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: COLORS.textMuted }} width={110} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="current" stackId="a" fill={COLORS.parCurrent} name="Current" />
              <Bar dataKey="par30" stackId="a" fill={COLORS.par30} name="PAR30" />
              <Bar dataKey="par90" stackId="a" fill={COLORS.par90} name="PAR90" radius={[0, 3, 3, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <ChartCard title="Delinquent Loans Drill-Down" height={290}>
        <DataTable maxH={280} columns={[
          { key: "id", label: "Loan #", bold: true },
          { key: "client", label: "Client" },
          { key: "branch", label: "Branch" },
          { key: "officer", label: "Officer" },
          { key: "bucket", label: "PAR Bucket", render: (v: string) => <span style={{ color: v.includes("180") ? COLORS.par180 : v.includes("90") ? COLORS.par90 : v.includes("30") ? COLORS.par30 : COLORS.navy, fontWeight: 600 }}>{v}</span> },
          { key: "daysArrears", label: "Days Arrears", align: "right", render: (v: number) => <span style={{ fontWeight: 700, color: v > 90 ? COLORS.crimson : v > 30 ? COLORS.accent2 : COLORS.text }}>{v}</span> },
          { key: "outstanding", label: "Outstanding (K)", align: "right", render: (v: number) => `K ${v.toLocaleString()}` },
        ]} data={delinquentLoans} />
      </ChartCard>
    </div>
  )
}

const OfficerDashboard = () => {
  const [filters, setFilters] = useState<Record<string, string>>({})
  const filterDefs = [
    { key: "branch", label: "Branch", icon: "🏢", options: BRANCHES },
    { key: "currency", label: "Currency", icon: "💱", options: CURRENCIES },
    { key: "officer", label: "Officer", icon: "👤", options: OFFICERS },
  ]
  return (
    <div>
      <FilterBar filters={filterDefs} values={filters} onChange={setFilters} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <ChartCard title="Portfolio by Loan Officer" height={280}>
          <ResponsiveContainer>
            <BarChart data={officerScorecard} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
              <XAxis dataKey="name" tick={{ fontSize: 9, fill: COLORS.textMuted }} />
              <YAxis tickFormatter={fmt} tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <defs>
                <linearGradient id="barGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS.navy} />
                  <stop offset="100%" stopColor={COLORS.navyLight} />
                </linearGradient>
              </defs>
              <Bar dataKey="portfolio" fill="url(#barGrad2)" radius={[4, 4, 0, 0]} name="Portfolio (K)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="PAR30 Rate by Officer (%)" height={280}>
          <ResponsiveContainer>
            <BarChart data={officerScorecard} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
              <XAxis dataKey="name" tick={{ fontSize: 9, fill: COLORS.textMuted }} />
              <YAxis tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} unit="%" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="par30Rate" name="PAR30 %" radius={[4, 4, 0, 0]}>
                {officerScorecard.map((e, i) => <Cell key={i} fill={e.par30Rate > 10 ? COLORS.crimson : e.par30Rate > 5 ? COLORS.accent1 : COLORS.accent3} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 16 }}>
        <ChartCard title="Loan Officer Scorecard" height={320}>
          <DataTable maxH={310} columns={[
            { key: "name", label: "Officer", bold: true },
            { key: "activeLoans", label: "Loans", align: "right" },
            { key: "clients", label: "Clients", align: "right" },
            { key: "portfolio", label: "Portfolio (K)", align: "right", render: (v: number) => `K ${fmt(v)}` },
            { key: "collected", label: "Collected (K)", align: "right", render: (v: number) => `K ${fmt(v)}` },
            { key: "par30Rate", label: "PAR30%", align: "right", render: (v: number) => <span style={{ fontWeight: 700, color: v > 10 ? COLORS.crimson : v > 5 ? COLORS.accent1 : COLORS.accent3 }}>{v}%</span> },
            { key: "collectionRate", label: "Coll. Rate", align: "right", render: (v: number) => <span style={{ fontWeight: 700, color: v > 80 ? COLORS.accent3 : v > 60 ? COLORS.accent1 : COLORS.crimson }}>{v}%</span> },
          ]} data={officerScorecard} />
        </ChartCard>
        <ChartCard title="Collections vs Portfolio" height={320}>
          <ResponsiveContainer>
            <ComposedChart data={officerScorecard}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
              <XAxis dataKey="name" tick={{ fontSize: 9, fill: COLORS.textMuted }} />
              <YAxis tickFormatter={fmt} tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="portfolio" fill={COLORS.navy} barSize={18} radius={[3, 3, 0, 0]} name="Portfolio (K)" />
              <Bar dataKey="collected" fill={COLORS.accent3} barSize={18} radius={[3, 3, 0, 0]} name="Collected (K)" />
              <YAxis yAxisId={1} orientation="right" tick={{ fontSize: 10, fill: COLORS.textMuted }} unit="%" />
              <Line type="monotone" dataKey="collectionRate" stroke={COLORS.crimson} strokeWidth={2} dot={{ r: 4, fill: COLORS.crimson }} name="Coll. Rate %" yAxisId={1} />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  )
}

const DisbDashboard = () => {
  const [filters, setFilters] = useState<Record<string, string>>({})
  const filterDefs = [
    { key: "currency", label: "Currency", icon: "💱", options: CURRENCIES },
    { key: "branch", label: "Branch", icon: "🏢", options: BRANCHES },
    { key: "officer", label: "Officer", icon: "👤", options: OFFICERS },
    { key: "product", label: "Product", icon: "📦", options: PRODUCTS },
  ]
  const totalDisb = disbCollMonthly.reduce((s, d) => s + d.disbursed, 0)
  return (
    <div>
      <FilterBar filters={filterDefs} values={filters} onChange={setFilters} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: 16, marginBottom: 16 }}>
        <KPICard icon="💰" label="Total Disbursed YTD" value={`K ${fmt(totalDisb)}`} sub="Year-to-date disbursements" trend={12.4} />
        <ChartCard title="Disbursements vs Collections Monthly" height={250}>
          <ResponsiveContainer>
            <ComposedChart data={disbCollMonthly}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: COLORS.textMuted }} />
              <YAxis tickFormatter={fmt} tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="disbursed" fill={COLORS.navy} barSize={22} radius={[3, 3, 0, 0]} name="Disbursed (K)" />
              <Line type="monotone" dataKey="collected" stroke={COLORS.crimson} strokeWidth={2.5} dot={{ r: 4, fill: COLORS.crimson, stroke: "#fff", strokeWidth: 2 }} name="Collected (K)" />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <ChartCard title="Monthly Disbursements" height={260}>
          <ResponsiveContainer>
            <BarChart data={disbCollMonthly} barSize={24}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
              <XAxis dataKey="month" tick={{ fontSize: 9, fill: COLORS.textMuted }} />
              <YAxis tickFormatter={fmt} tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <defs>
                <linearGradient id="disbBar2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS.navy} />
                  <stop offset="100%" stopColor={COLORS.navyLight} stopOpacity={0.7} />
                </linearGradient>
              </defs>
              <Bar dataKey="disbursed" fill="url(#disbBar2)" radius={[4, 4, 0, 0]} name="Disbursed (K)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Loans Disbursed Count" height={260}>
          <ResponsiveContainer>
            <LineChart data={disbCollMonthly}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
              <XAxis dataKey="month" tick={{ fontSize: 9, fill: COLORS.textMuted }} />
              <YAxis tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="loansDisbursed" stroke={COLORS.crimson} strokeWidth={2.5} dot={{ r: 5, fill: COLORS.crimson, stroke: "#fff", strokeWidth: 2 }} name="# Loans" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <ChartCard title="Collections Breakdown (Stacked)" height={260}>
        <ResponsiveContainer>
          <AreaChart data={collectionsBreakdown}>
            <defs>
              <linearGradient id="cPrinc2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={COLORS.navy} stopOpacity={0.6} /><stop offset="100%" stopColor={COLORS.navy} stopOpacity={0.1} /></linearGradient>
              <linearGradient id="cInt2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={COLORS.crimson} stopOpacity={0.6} /><stop offset="100%" stopColor={COLORS.crimson} stopOpacity={0.1} /></linearGradient>
              <linearGradient id="cFee2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={COLORS.accent3} stopOpacity={0.6} /><stop offset="100%" stopColor={COLORS.accent3} stopOpacity={0.1} /></linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
            <XAxis dataKey="month" tick={{ fontSize: 10, fill: COLORS.textMuted }} />
            <YAxis tickFormatter={fmt} tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Area type="monotone" dataKey="principal" stackId="1" stroke={COLORS.navy} fill="url(#cPrinc2)" name="Principal" />
            <Area type="monotone" dataKey="interest" stackId="1" stroke={COLORS.crimson} fill="url(#cInt2)" name="Interest" />
            <Area type="monotone" dataKey="fees" stackId="1" stroke={COLORS.accent3} fill="url(#cFee2)" name="Fees" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}

const ClientDashboard = () => {
  const [filters, setFilters] = useState<Record<string, string>>({})
  const filterDefs = [
    { key: "status", label: "Client Status", icon: "✅", options: ["Active", "Closed"] },
    { key: "gender", label: "Gender", icon: "⚥", options: ["Male", "Female", "Other"] },
    { key: "branch", label: "Branch", icon: "🏢", options: BRANCHES },
    { key: "ageBand", label: "Age Band", icon: "📊", options: AGE_BANDS },
  ]
  return (
    <div>
      <FilterBar filters={filterDefs} values={filters} onChange={setFilters} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: 16, marginBottom: 16 }}>
        <KPICard icon="👥" label="Total Active Clients" value="2,847" sub="Active status (300)" trend={6.8} color={COLORS.navy} />
        <ChartCard title="Client Growth by Month" height={250}>
          <ResponsiveContainer>
            <AreaChart data={clientGrowth}>
              <defs>
                <linearGradient id="clientGrad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS.navy} stopOpacity={0.25} />
                  <stop offset="100%" stopColor={COLORS.navy} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: COLORS.textMuted }} />
              <YAxis tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="total" stroke={COLORS.navy} strokeWidth={2.5} fill="url(#clientGrad2)" name="Total Clients" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 16 }}>
        <ChartCard title="Gender Distribution" height={240}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={genderDist} cx="50%" cy="45%" outerRadius={80} innerRadius={45} dataKey="value" paddingAngle={4} stroke="none" label={({ name, value }: { name: string; value: number }) => `${name} ${value}%`} labelLine={false}>
                <Cell fill={COLORS.crimson} /><Cell fill={COLORS.navy} /><Cell fill={COLORS.textMuted} />
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Clients by Age Band" height={240}>
          <ResponsiveContainer>
            <BarChart data={ageDist} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
              <XAxis dataKey="name" tick={{ fontSize: 9, fill: COLORS.textMuted }} />
              <YAxis tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]} name="Clients">
                {ageDist.map((_, i) => <Cell key={i} fill={[COLORS.navy, COLORS.navyLight, COLORS.accent1, COLORS.accent2, COLORS.crimson][i]} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
        <ChartCard title="Clients by Branch" height={240}>
          <ResponsiveContainer>
            <BarChart data={clientsByBranch} layout="vertical" barSize={18}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: COLORS.textMuted }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fill: COLORS.textMuted }} width={110} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="clients" fill={COLORS.accent3} radius={[0, 4, 4, 0]} name="Clients" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      <ChartCard title="New vs Exited Clients by Month" height={260}>
        <ResponsiveContainer>
          <ComposedChart data={clientGrowth}>
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} />
            <XAxis dataKey="month" tick={{ fontSize: 10, fill: COLORS.textMuted }} />
            <YAxis tick={{ fontSize: 10, fill: COLORS.textMuted }} axisLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar dataKey="newClients" fill={COLORS.navy} barSize={22} radius={[3, 3, 0, 0]} name="New Clients" />
            <Bar dataKey="exited" fill={COLORS.crimson} barSize={22} radius={[3, 3, 0, 0]} name="Exited Clients" />
            <YAxis yAxisId={1} orientation="right" tick={{ fontSize: 10, fill: COLORS.textMuted }} />
            <Line type="monotone" dataKey="total" stroke={COLORS.accent3} strokeWidth={2} dot={{ r: 3 }} name="Cumulative" yAxisId={1} />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}

// ─── TABS ──────────────────────────────────────────────────────
const TABS = [
  { id: "exec", label: "Executive Summary", icon: "📊" },
  { id: "par", label: "Portfolio at Risk", icon: "⚠️" },
  { id: "officer", label: "Loan Officers", icon: "👤" },
  { id: "disb", label: "Disbursements", icon: "💰" },
  { id: "client", label: "Client Analytics", icon: "👥" },
]

const DASHBOARDS_MAP: Record<string, React.ComponentType> = {
  exec: ExecDashboard,
  par: PARDashboard,
  officer: OfficerDashboard,
  disb: DisbDashboard,
  client: ClientDashboard,
}

// ─── MODAL EXPORT ──────────────────────────────────────────────
export function LiveDemoModal({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState("exec")
  const ActiveDashboard = DASHBOARDS_MAP[activeTab]

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [onClose])

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Modal panel */}
      <div
        className="relative w-full flex flex-col rounded-2xl overflow-hidden shadow-2xl"
        style={{
          maxWidth: 1320,
          height: "90vh",
          background: COLORS.bg,
          animation: "modalIn 0.25s ease-out",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-white/20"
          style={{ color: "rgba(255,255,255,0.8)" }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Suite header */}
        <div style={{
          background: `linear-gradient(135deg, ${COLORS.navyDark} 0%, ${COLORS.navy} 100%)`,
          padding: "14px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 7, background: COLORS.crimson, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: "#fff" }}>M</div>
            <div>
              <div style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}>MFI Reporting Suite</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 10, letterSpacing: 1.2, textTransform: "uppercase" }}>Fineract · Microfinance Intelligence · Live Demo</div>
            </div>
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>Last refreshed: {new Date().toLocaleDateString()}</div>
        </div>

        {/* Tabs */}
        <div style={{ background: COLORS.card, borderBottom: `1px solid ${COLORS.border}`, padding: "0 20px", display: "flex", gap: 0, overflowX: "auto", flexShrink: 0 }}>
          {TABS.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
              padding: "12px 18px", border: "none", background: "transparent", cursor: "pointer",
              fontSize: 12, fontWeight: activeTab === t.id ? 700 : 500,
              color: activeTab === t.id ? COLORS.navy : COLORS.textMuted,
              borderBottom: activeTab === t.id ? `3px solid ${COLORS.crimson}` : "3px solid transparent",
              transition: "all 0.15s", whiteSpace: "nowrap",
            }}>
              <span style={{ marginRight: 6 }}>{t.icon}</span>{t.label}
            </button>
          ))}
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", fontFamily: "Inter, system-ui, sans-serif" }}>
          <ActiveDashboard />
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "10px 0", color: COLORS.textLight, fontSize: 10, letterSpacing: 0.5, borderTop: `1px solid ${COLORS.border}`, flexShrink: 0, background: COLORS.card }}>
          MFI REPORTING SUITE · POWERED BY FINERACT · © {new Date().getFullYear()}
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  )
}
