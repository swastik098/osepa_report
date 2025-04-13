import React, { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement,
  Legend,
  RadialLinearScale,
} from 'chart.js'
import { Doughnut, Bar, Pie, PolarArea } from 'react-chartjs-2'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  RadialLinearScale,
)

const Dashboard = () => {
  const [filters, setFilters] = useState({
    district: '',
    block: '',
    school: '',
    cluster: '',
    trainingDateFrom: '',
    trainingDateTo: '',
  })
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      trainingDateFrom: startDate,
      trainingDateTo: endDate,
    }))
  }, [startDate, endDate])

  const districts = [
    { label: 'Khordha', value: 'khordha' },
    { label: 'Cuttack', value: 'cuttack' },
    { label: 'Puri', value: 'puri' },
  ]

  const blocksData = {
    khordha: [
      { label: 'Block A1', value: 'blockA1' },
      { label: 'Block A2', value: 'blockA2' },
    ],
    cuttack: [
      { label: 'Block B1', value: 'blockB1' },
      { label: 'Block B2', value: 'blockB2' },
    ],
    puri: [
      { label: 'Block C1', value: 'blockC1' },
      { label: 'Block C2', value: 'blockC2' },
    ],
  }

  const clustersData = {
    blockA1: [
      { label: 'Cluster A1', value: 'clusterA1' },
      { label: 'Cluster A2', value: 'clusterA2' },
    ],
    blockB1: [{ label: 'Cluster B1', value: 'clusterB1' }],
  }

  const schoolsData = {
    clusterA1: [
      { label: 'School X1', value: 'schoolX1' },
      { label: 'School X2', value: 'schoolX2' },
    ],
    clusterA2: [{ label: 'School X3', value: 'schoolX3' }],
    clusterB1: [{ label: 'School Y1', value: 'schoolY1' }],
  }

  const dropdownStyle = {
    borderRadius: '12px',
    padding: '10px',
    border: '1px solid #ccc',
    backgroundColor: '#f5faff',
    fontWeight: 500,
  }

  const customStyles = {
    control: (base) => ({
      ...base,
      ...dropdownStyle,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999,
    }),
  }

  const handleChange = (field) => (e) => {
    setFilters((prev) => ({
      ...prev,
      [field]: e.target.value,
    }))
  }

  const handleDistrictChange = (selectedOption) => {
    setFilters({
      district: selectedOption?.value || '',
      block: '',
      cluster: '',
      school: '',
    })
  }

  const handleBlockChange = (selectedOption) => {
    setFilters((prev) => ({
      ...prev,
      block: selectedOption?.value || '',
      cluster: '',
      school: '',
    }))
  }

  const handleClusterChange = (selectedOption) => {
    setFilters((prev) => ({
      ...prev,
      cluster: selectedOption?.value || '',
      school: '',
    }))
  }

  const handleSchoolChange = (selectedOption) => {
    setFilters((prev) => ({
      ...prev,
      school: selectedOption?.value || '',
    }))
  }

  const doughnutData = {
    labels: ['Started', 'Completed', 'In Progress'],
    datasets: [
      {
        data: [120, 80, 40],
        backgroundColor: ['#4a90e2', '#7ed321', '#f5a623'],
      },
    ],
  }
  const barData = {
    labels: ['MPP_ZPP', 'MUNICIPAL', 'STATE GOVT.'],
    datasets: [
      {
        label: 'Teachers Completed',
        data: [109, 3, 1],
        backgroundColor: '#7ed321',
      },
    ],
  }
  const summaryData = {
    districts: 3,
    blocks: 6,
    teachers: 350,
    students: 900,
  }

  const polarData = {
    labels: ['PDF', 'Videos', 'SubModules'],
    datasets: [
      {
        label: 'Resources Used',
        data: [147, 242, 112],
        backgroundColor: ['#f5a623', '#4a90e2', '#50e3c2'],
      },
    ],
  }
  const pieData = {
    labels: ['PDF', 'Video', 'Submodule'],
    datasets: [
      {
        data: [100, 150, 200],
        backgroundColor: ['#f06292', '#ba68c8', '#4db6ac'],
      },
    ],
  }

  const polarAreaData = {
    labels: ['GPC01M01SM01', 'GPC01M01SM02', 'GPC01M01SM03'],
    datasets: [
      {
        label: 'Module Engagement',
        data: [120, 90, 150],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
      },
    ],
  }

  return (
    <div style={{ padding: '20px', background: '#eaf6ff' }}>
      {/* Filters */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          marginBottom: '30px',
          maxWidth: '1200px',
          marginLeft: -104,
        }}
      >
        <Select
          options={districts}
          value={districts.find((d) => d.value === filters.district)}
          onChange={handleDistrictChange}
          styles={customStyles}
          isClearable
          isSearchable
          placeholder="Select District"
        />
        <Select
          options={blocksData[filters.district] || []}
          value={(blocksData[filters.district] || []).find((b) => b.value === filters.block)}
          onChange={handleBlockChange}
          styles={customStyles}
          isClearable
          isSearchable
          placeholder="Select Block"
        />
        <Select
          options={clustersData[filters.block] || []}
          value={(clustersData[filters.block] || []).find((c) => c.value === filters.cluster)}
          onChange={handleClusterChange}
          styles={customStyles}
          isClearable
          isSearchable
          placeholder="Select Cluster"
        />
        <Select
          options={schoolsData[filters.cluster] || []}
          value={(schoolsData[filters.cluster] || []).find((s) => s.value === filters.school)}
          onChange={handleSchoolChange}
          styles={customStyles}
          isClearable
          isSearchable
          placeholder="Select School"
        />

        <div>
          <label style={{ fontSize: 12 }}>Training Date To</label>
          <input
            type="date"
            style={dropdownStyle}
            value={filters.trainingDateTo}
            onChange={handleChange('trainingDateTo')}
          />
        </div>
      </div>

      {/* Charts Section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginLeft: -104,
        }}
      >
        {/* Bar Chart Box */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '20px' }}>Teachers Completion Overview</h3>
          <Bar data={barData} />
        </div>

        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '20px' }}>Content Usage Distribution</h3>
          <PolarArea data={polarData} />
        </div>

        {/* Table Summary Box */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px' }}>
          <h3 style={{ marginBottom: '20px' }}>Summary Statistics</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {Object.entries(summaryData).map(([key, value]) => (
                <tr key={key} style={{ borderBottom: '1px solid #ccc' }}>
                  <td style={{ padding: '10px', fontWeight: 'bold', textTransform: 'capitalize' }}>
                    {key}
                  </td>
                  <td style={{ padding: '10px' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
