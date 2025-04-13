import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { DatePicker } from 'antd'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import CustomOption from '../../components/header/SelectInput'
import { Bar } from 'react-chartjs-2'
import Select from 'react-select'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
)
const { RangePicker } = DatePicker

const ITEMS_PER_LOAD = 10
const districtSummaryData = [
  {
    district: 'Anakapalli',
    block: 'North',
    numberOfGroups: 3,
    numberOfClusters: 6,
    totalStudents: 720,
    totalSchools: 80,
    totalContactNumbers: 700,
    classWiseStudents: {
      class1: 60,
      class2: 65,
      class3: 70,
      class4: 75,
      class5: 80,
      class6: 60,
      class7: 50,
      class8: 60,
      class9: 70,
      class10: 70,
    },
  },
  {
    district: 'Anantapur',
    block: 'West',
    numberOfGroups: 5,
    numberOfClusters: 8,
    totalStudents: 1500,
    totalSchools: 140,
    totalContactNumbers: 1200,
    classWiseStudents: {
      class1: 130,
      class2: 140,
      class3: 150,
      class4: 120,
      class5: 110,
      class6: 130,
      class7: 140,
      class8: 130,
      class9: 120,
      class10: 120,
    },
  },
  {
    district: 'Chittoor',
    block: 'South',
    numberOfGroups: 4,
    numberOfClusters: 7,
    totalStudents: 1100,
    totalSchools: 100,
    totalContactNumbers: 950,
    classWiseStudents: {
      class1: 100,
      class2: 90,
      class3: 95,
      class4: 105,
      class5: 110,
      class6: 100,
      class7: 100,
      class8: 105,
      class9: 95,
      class10: 100,
    },
  },
  {
    district: 'Kadapa',
    block: 'East',
    numberOfGroups: 2,
    numberOfClusters: 3,
    totalStudents: 600,
    totalSchools: 68,
    totalContactNumbers: 580,
    classWiseStudents: {
      class1: 50,
      class2: 55,
      class3: 60,
      class4: 58,
      class5: 62,
      class6: 61,
      class7: 55,
      class8: 53,
      class9: 58,
      class10: 58,
    },
  },
  {
    district: 'Kakinada',
    block: 'Central',
    numberOfGroups: 6,
    numberOfClusters: 9,
    totalStudents: 1300,
    totalSchools: 110,
    totalContactNumbers: 1120,
    classWiseStudents: {
      class1: 120,
      class2: 130,
      class3: 125,
      class4: 135,
      class5: 140,
      class6: 120,
      class7: 110,
      class8: 130,
      class9: 115,
      class10: 125,
    },
  },
  {
    district: 'Guntur',
    block: 'North',
    numberOfGroups: 3,
    numberOfClusters: 5,
    totalStudents: 800,
    totalSchools: 75,
    totalContactNumbers: 750,
    classWiseStudents: {
      class1: 70,
      class2: 75,
      class3: 80,
      class4: 85,
      class5: 90,
      class6: 80,
      class7: 70,
      class8: 75,
      class9: 85,
      class10: 90,
    },
  },
  {
    district: 'Eluru',
    block: 'West',
    numberOfGroups: 4,
    numberOfClusters: 7,
    totalStudents: 950,
    totalSchools: 85,
    totalContactNumbers: 870,
    classWiseStudents: {
      class1: 85,
      class2: 80,
      class3: 75,
      class4: 95,
      class5: 90,
      class6: 85,
      class7: 80,
      class8: 90,
      class9: 85,
      class10: 85,
    },
  },
  {
    district: 'East Godavari',
    block: 'East',
    numberOfGroups: 1,
    numberOfClusters: 2,
    totalStudents: 300,
    totalSchools: 35,
    totalContactNumbers: 250,
    classWiseStudents: {
      class1: 30,
      class2: 25,
      class3: 35,
      class4: 30,
      class5: 32,
      class6: 28,
      class7: 27,
      class8: 28,
      class9: 32,
      class10: 33,
    },
  },
  {
    district: 'Bapatla',
    block: 'South',
    numberOfGroups: 2,
    numberOfClusters: 3,
    totalStudents: 500,
    totalSchools: 55,
    totalContactNumbers: 480,
    classWiseStudents: {
      class1: 45,
      class2: 50,
      class3: 55,
      class4: 60,
      class5: 50,
      class6: 40,
      class7: 45,
      class8: 48,
      class9: 52,
      class10: 55,
    },
  },
  {
    district: 'ASR',
    block: 'North',
    numberOfGroups: 3,
    numberOfClusters: 6,
    totalStudents: 760,
    totalSchools: 70,
    totalContactNumbers: 720,
    classWiseStudents: {
      class1: 70,
      class2: 75,
      class3: 80,
      class4: 85,
      class5: 75,
      class6: 70,
      class7: 68,
      class8: 69,
      class9: 70,
      class10: 68,
    },
  },
  {
    district: 'Annamayya',
    block: 'Central',
    numberOfGroups: 2,
    numberOfClusters: 4,
    totalStudents: 540,
    totalSchools: 50,
    totalContactNumbers: 500,
    classWiseStudents: {
      class1: 50,
      class2: 48,
      class3: 55,
      class4: 52,
      class5: 53,
      class6: 54,
      class7: 50,
      class8: 48,
      class9: 55,
      class10: 55,
    },
  },
  {
    district: 'Vizianagaram',
    block: 'East',
    numberOfGroups: 3,
    numberOfClusters: 6,
    totalStudents: 800,
    totalSchools: 78,
    totalContactNumbers: 770,
    classWiseStudents: {
      class1: 72,
      class2: 75,
      class3: 76,
      class4: 78,
      class5: 82,
      class6: 80,
      class7: 78,
      class8: 76,
      class9: 77,
      class10: 76,
    },
  },
  {
    district: 'Nellore',
    block: 'South',
    numberOfGroups: 4,
    numberOfClusters: 8,
    totalStudents: 1000,
    totalSchools: 95,
    totalContactNumbers: 950,
    classWiseStudents: {
      class1: 90,
      class2: 95,
      class3: 100,
      class4: 85,
      class5: 90,
      class6: 88,
      class7: 87,
      class8: 86,
      class9: 89,
      class10: 90,
    },
  },
  {
    district: 'Prakasam',
    block: 'West',
    numberOfGroups: 3,
    numberOfClusters: 5,
    totalStudents: 870,
    totalSchools: 82,
    totalContactNumbers: 850,
    classWiseStudents: {
      class1: 80,
      class2: 85,
      class3: 87,
      class4: 90,
      class5: 92,
      class6: 88,
      class7: 86,
      class8: 84,
      class9: 86,
      class10: 90,
    },
  },
  {
    district: 'Srikakulam',
    block: 'East',
    numberOfGroups: 2,
    numberOfClusters: 4,
    totalStudents: 620,
    totalSchools: 60,
    totalContactNumbers: 590,
    classWiseStudents: {
      class1: 60,
      class2: 62,
      class3: 65,
      class4: 58,
      class5: 60,
      class6: 64,
      class7: 62,
      class8: 60,
      class9: 63,
      class10: 66,
    },
  },
  {
    district: 'Tirupati',
    block: 'Central',
    numberOfGroups: 4,
    numberOfClusters: 7,
    totalStudents: 980,
    totalSchools: 88,
    totalContactNumbers: 940,
    classWiseStudents: {
      class1: 85,
      class2: 90,
      class3: 92,
      class4: 94,
      class5: 96,
      class6: 90,
      class7: 88,
      class8: 89,
      class9: 91,
      class10: 95,
    },
  },
  {
    district: 'Vijayawada',
    block: 'North',
    numberOfGroups: 5,
    numberOfClusters: 9,
    totalStudents: 1200,
    totalSchools: 105,
    totalContactNumbers: 1150,
    classWiseStudents: {
      class1: 110,
      class2: 115,
      class3: 118,
      class4: 120,
      class5: 122,
      class6: 115,
      class7: 110,
      class8: 108,
      class9: 112,
      class10: 120,
    },
  },
  {
    district: 'West Godavari',
    block: 'West',
    numberOfGroups: 4,
    numberOfClusters: 8,
    totalStudents: 960,
    totalSchools: 90,
    totalContactNumbers: 920,
    classWiseStudents: {
      class1: 88,
      class2: 90,
      class3: 92,
      class4: 95,
      class5: 96,
      class6: 91,
      class7: 89,
      class8: 88,
      class9: 90,
      class10: 91,
    },
  },
  {
    district: 'Kurnool',
    block: 'South',
    numberOfGroups: 3,
    numberOfClusters: 6,
    totalStudents: 830,
    totalSchools: 77,
    totalContactNumbers: 800,
    classWiseStudents: {
      class1: 75,
      class2: 78,
      class3: 80,
      class4: 83,
      class5: 85,
      class6: 80,
      class7: 78,
      class8: 75,
      class9: 77,
      class10: 80,
    },
  },
  {
    district: 'Nandyal',
    block: 'East',
    numberOfGroups: 2,
    numberOfClusters: 4,
    totalStudents: 670,
    totalSchools: 65,
    totalContactNumbers: 640,
    classWiseStudents: {
      class1: 60,
      class2: 65,
      class3: 68,
      class4: 70,
      class5: 72,
      class6: 66,
      class7: 64,
      class8: 63,
      class9: 65,
      class10: 67,
    },
  },
]

const Dashboard = (props) => {
  const [filters, setFilters] = useState({
    district: '',
    block: '',
    school: '',
    cluster: '',
    trainingDateFrom: '',
    trainingDateTo: '',
  })
  const [selectedRange, setSelectedRange] = useState([])
  const [stDate, setStDate] = useState()
  const [NdDate, setNdDate] = useState()

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD)
  const containerRef = useRef(null)

  const handleScroll = () => {
    const container = containerRef.current
    if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
      setVisibleCount((prev) => Math.min(prev + ITEMS_PER_LOAD, districtSummaryData.length))
    }
  }

  useEffect(() => {
    const current = containerRef.current
    if (current) current.addEventListener('scroll', handleScroll)
    return () => {
      if (current) current.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (stDate && NdDate) {
      setFilters((prev) => ({
        ...prev,
        trainingDateFrom: stDate,
        trainingDateTo: NdDate,
      }))
    }
  }, [stDate, NdDate])

  const districts = [
    { label: 'Khordha', value: 'khordha' },
    { label: 'Cuttack', value: 'cuttack' },
    { label: 'Puri', value: 'puri' },
    { label: 'Balasore', value: 'balasore' },
    { label: 'Ganjam', value: 'ganjam' },
  ]

  const blocksData = {
    khordha: [
      { label: 'Bhubaneswar', value: 'bhubaneswar' },
      { label: 'Bolangir', value: 'bolangir' },
    ],
    cuttack: [
      { label: 'Banki', value: 'banki' },
      { label: 'Niali', value: 'niali' },
    ],
    puri: [
      { label: 'Krushnaprasad', value: 'krushnaprasad' },
      { label: 'Satyabadi', value: 'satyabadi' },
    ],
    balasore: [
      { label: 'Nilagiri', value: 'nilagiri' },
      { label: 'Soro', value: 'soro' },
    ],
    ganjam: [
      { label: 'Chhatrapur', value: 'chhatrapur' },
      { label: 'Aska', value: 'aska' },
    ],
  }

  const clustersData = {
    bhubaneswar: [
      { label: 'BBSR Cluster 1', value: 'bbsrCluster1' },
      { label: 'BBSR Cluster 2', value: 'bbsrCluster2' },
    ],
    banki: [
      { label: 'Banki Cluster 1', value: 'bankiCluster1' },
      { label: 'Banki Cluster 2', value: 'bankiCluster2' },
    ],
    krushnaprasad: [{ label: 'KP Cluster A', value: 'kpClusterA' }],
    chhatrapur: [{ label: 'Chatrapur Cluster 1', value: 'chatrapurCluster1' }],
    soro: [{ label: 'Soro Cluster X', value: 'soroClusterX' }],
  }

  const schoolsData = {
    bbsrCluster1: [
      { label: 'BBSR School 1', value: 'bbsrSchool1' },
      { label: 'BBSR School 2', value: 'bbsrSchool2' },
    ],
    bbsrCluster2: [{ label: 'BBSR School 3', value: 'bbsrSchool3' }],
    bankiCluster1: [{ label: 'Banki School A', value: 'bankiSchoolA' }],
    kpClusterA: [{ label: 'KP School X', value: 'kpSchoolX' }],
    soroClusterX: [{ label: 'Soro School Z', value: 'soroSchoolZ' }],
  }

  const dropdownStyle = {
    borderRadius: '10px',
    padding: '10px',
    border: '1px solid #b2ebf2',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontWeight: 500,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  }
  const cardStyle = {
    background: '#e0f7f1',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    border: '2px solid #cceae4',
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
  const dateStyle = {
    height: 57,
    padding: '0 12px',
    border: '1px solid #b2ebf2',
    borderRadius: 10,
    fontSize: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  }
  const thStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    fontWeight: 'bold',
    textAlign: 'left',
  }

  const tdStyle = {
    padding: '10px',
    border: '1px solid #ddd',
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
  const handleRangeChange = async (dates) => {
    if (dates && dates.length === 2) {
      const [startDate, endDate] = dates
      console.log('Start Date:', startDate.format('DD.MM.YYYY'))
      console.log('End Date:', endDate.format('DD.MM.YYYY'))
      setStDate(startDate.format('YYYY-MM-DD'))
      setNdDate(endDate.format('YYYY-MM-DD'))
    }
    setSelectedRange(dates)
  }

  const barData = {
    labels: ['MPP_ZPP', 'MUNICIPAL', 'STATE GOVT.'],
    datasets: [
      {
        label: 'Teachers Completed',
        data: [109, 3, 1], // Replace with dynamic data if available
        backgroundColor: '#9575cd',
      },
    ],
  }

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 12 },
          boxWidth: 12,
        },
      },
      title: { display: false },
    },
    scales: {
      x: {
        ticks: { font: { size: 12 }, autoSkip: false, maxRotation: 90, minRotation: 45 },
      },
      y: {
        beginAtZero: true,
        ticks: { font: { size: 12 } },
      },
    },
  }

  const chartRelevantFields = [
    'Number of Content Shared',
    'Weekly Class wise Content Shared (Classes 1 to 10)',
    'Number of Content Read',
    'Videos Received',
    'Images Received',
    'Audios Received',
    'Class wise Number of Students (Classes 1 to 10)',
    'Two-way Interaction Messages',
  ]

  const shouldShowChart = (filters) => {
    const visibleFields = getDashboardFields(filters)
    return visibleFields.some((field) => chartRelevantFields.includes(field))
  }

  const progressData = {
    labels: ['PDF', 'SUMMOD-1', 'VIDEO', 'PDF', 'SUMMOD-2', 'VIDEO'],
    datasets: [
      {
        label: 'GPC01M01SM01',
        data: [628, 1820, 1829],
        backgroundColor: ['#36A2EB', '#36A2EB', '#36A2EB'],
      },
      {
        label: 'GPC01M01SM02',
        data: [457, 547, 555],
        backgroundColor: ['#FF9F40', '#FF9F40', '#FF9F40'],
      },
    ],
  }

  const getDashboardFields = (filters) => {
    if (filters.school) {
      return [
        'Class wise no of students',
        'Weekly Class wise Content Shared (Classes 1 to 10)',
        'Number of Content Shared',
        'Number of Content Read',
        'Videos Received',
        'Images Received',
        'Audios Received',
        'Two-way Interaction Messages',
      ]
    }

    if (filters.cluster) {
      return [
        'Total number of schools',
        'Number of Students',
        'Number of Groups',
        'Class wise no of students (1 to 10)',
        'Weekly Class wise Content Shared (Classes 1 to 10)',
        'Number of Content Shared',
        'Number of Content Read',
        'Videos Received',
        'Images Received',
        'Audios Received',
        'Two-way Interaction Messages',
      ]
    }

    if (filters.block) {
      return [
        'Total no of Schools',
        'Number of Students',
        'Number of Groups',
        'Class wise no of students (1 to 10)',
        'Weekly Class wise Content Shared (Classes 1 to 10)',
        'Number of Content Shared',
        'Number of Content Read',
        'Videos Received',
        'Images Received',
        'Audios Received',
        'Two-way Interaction Messages',
      ]
    }

    if (filters.district) {
      return [
        'Number of Blocks',
        'Number of Clusters',
        'Number of Groups',
        'Total Students',
        'Total Schools',
        'Number of Content Shared',
        'Weekly Class wise Content Shared (Classes 1 to 10)',
        'Number of Content Read',
        'Videos Received',
        'Images Received',
        'Audios Received',
        'Two-way Interaction Messages',
      ]
    }

    return [
      'Number of Districts',
      'Number of Blocks',
      'Number of Groups',
      'Total Students',
      'Total Schools',
      'Total Contact Numbers',
      'Number of Content Shared',
      'Weekly Class wise Content Shared (Classes 1 to 10)',
      'Number of Content Read',
      'Videos Received',
      'Images Received',
      'Audios Received',
      'Class wise Number of Students (Classes 1 to 10)',
      'Two-way Interaction Messages',
    ]
  }

  const dashboardValues = {
    'Number of Districts': '30',
    'Number of Blocks': '314',
    'Number of Clusters': '5,200',
    'Number of Groups': '4,200',
    'Total Students': '55,000',
    'Total Schools': '1,200',
    'Total Contact Numbers': '50,000',
    'Number of Content Shared': '9,823',
    'Weekly Class wise Content Shared (Classes 1 to 10)': '1,200',
    'Number of Content Read': '7,800',
    'Videos Received': '2,340',
    'Images Received': '1,200',
    'Audios Received': '890',
    'Class wise Number of Students (Classes 1 to 10)': 'Varies',
    'Class wise no of students (1 to 10)': 'Dynamic Count',
    'Total number of schools': '450',
    'Total no of Schools': '450',
    'Number of Students': '8,200',
    'Class wise no of students': 'Dynamic',
    'Two-way Interaction Messages': '3,200',
  }

  const dashboardFields = getDashboardFields(filters)
  const chartFieldsMap = {
    'Number of Content Shared': 'Number of Content Shared',
    'Weekly Class wise Content Shared (Classes 1 to 10)': 'Weekly Classwise Content Shared',
    'Number of Content Read': 'Content Read',
    'Videos Received': 'Videos Received',
    'Images Received': 'Images Received',
    'Audios Received': 'Audios Received',
    'Class wise Number of Students (Classes 1 to 10)': 'Classwise Students',
    'Class wise no of students (1 to 10)': 'Classwise Students',
    'Total number of schools': 'Total Schools',
    'Total no of Schools': 'Total Schools',
    'Number of Students': 'Total Students',
    'Class wise no of students': 'Classwise Students',
    'Two-way Interaction Messages': 'Two-way Messages',
  }
  const getLineChartData = (dashboardValues) => {
    const labels = []
    const data = []

    for (const [key, label] of Object.entries(chartFieldsMap)) {
      const rawValue = dashboardValues[key]
      const numeric = typeof rawValue === 'string' ? parseInt(rawValue.replace(/,/g, '')) : rawValue

      if (!isNaN(numeric)) {
        labels.push(label)
        data.push(numeric)
      }
    }

    return {
      labels,
      datasets: [
        {
          label: 'Dashboard Metrics',
          data,
          fill: false,
          borderColor: '#42a5f5',
          backgroundColor: '#42a5f5',
          tension: 0.4,
        },
      ],
    }
  }

  const lineData = getLineChartData(dashboardValues)
  return (
    <div
      style={{
        padding: '20px',
        background: 'linear-gradient(135deg, #e0f7fa, #fce4ec)',
        minHeight: '100vh',
      }}
    >
      {/* Filters */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '15px',
          marginBottom: '30px',
          maxWidth: '1200px',
          // marginLeft: -104,
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
          components={{ Option: CustomOption }}
        />
        <Select
          options={blocksData[filters.district] || []}
          value={(blocksData[filters.district] || []).find((b) => b.value === filters.block)}
          onChange={handleBlockChange}
          styles={customStyles}
          isClearable
          isSearchable
          placeholder="Select Block"
          components={{ Option: CustomOption }}
        />
        <Select
          options={clustersData[filters.block] || []}
          value={(clustersData[filters.block] || []).find((c) => c.value === filters.cluster)}
          onChange={handleClusterChange}
          styles={customStyles}
          isClearable
          isSearchable
          placeholder="Select Cluster"
          components={{ Option: CustomOption }}
        />
        <Select
          options={schoolsData[filters.cluster] || []}
          value={(schoolsData[filters.cluster] || []).find((s) => s.value === filters.school)}
          onChange={handleSchoolChange}
          styles={customStyles}
          isClearable
          isSearchable
          placeholder="Select School"
          components={{ Option: CustomOption }}
        />

        <div>
          <RangePicker
            format="DD.MM.YYYY"
            value={selectedRange}
            onChange={handleRangeChange}
            style={{
              ...dateStyle,
              width: '100%',
            }}
            placeholder={['Start Date', 'End Date']}
          />
        </div>
      </div>

      {/* ADD ROWS */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          maxWidth: '1400px',
          margin: '0 auto 30px auto',
        }}
      >
        {dashboardFields.map((title, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 calc(20% - 16px)',
              backgroundColor: index % 2 === 0 ? '#A3D9A5' : '#B1A7E7',
              borderRadius: '12px',
              padding: '16px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              minWidth: '200px',
            }}
          >
            <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
              {dashboardValues[title] || '--'}
            </h3>
            <p style={{ margin: 0, fontSize: '14px' }}>{title}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '20px',
          maxWidth: '1400px',
          margin: '30px auto',
          padding: '0 16px',
        }}
      >
        {lineData.labels.length > 0 && (
          <div style={cardStyle}>
            <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>
              Dashboard Content & Engagement Overview
            </h3>
            <Line data={lineData} options={barOptions} />
          </div>
        )}

        <div style={cardStyle}>
          <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>
            Status of In-Progress Teachers
          </h3>
          <Bar data={progressData} options={barOptions} />
        </div>

        {/* Table datas */}
        <div style={{ ...cardStyle, gridColumn: '1 / -1' }}>
          <h3 style={{ marginBottom: '16px', textAlign: 'center' }}>
            District wise teacher/school list
          </h3>

          <div
            ref={containerRef}
            style={{
              maxHeight: '400px',
              overflowY: 'auto',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          >
            <table style={{ width: '100%', fontSize: '14px', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f0f0f0', position: 'sticky', top: 0 }}>
                <tr>
                  <th style={thStyle}>District</th>
                  <th style={thStyle}>Block</th>
                  <th style={thStyle}>Groups</th>
                  <th style={thStyle}>Clusters</th>
                  <th style={thStyle}>Students</th>
                  <th style={thStyle}>Schools</th>
                  <th style={thStyle}>Contact Numbers</th>
                  {Array.from({ length: 10 }, (_, i) => (
                    <th key={i} style={thStyle}>
                      Class {i + 1}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {districtSummaryData.slice(0, visibleCount).map((row, idx) => (
                  <tr key={idx}>
                    <td style={tdStyle}>{row.district}</td>
                    <td style={tdStyle}>{row.block}</td>
                    <td style={tdStyle}>{row.numberOfGroups}</td>
                    <td style={tdStyle}>{row.numberOfClusters}</td>
                    <td style={tdStyle}>{row.totalStudents}</td>
                    <td style={tdStyle}>{row.totalSchools}</td>
                    <td style={tdStyle}>{row.totalContactNumbers}</td>
                    {Array.from({ length: 10 }, (_, i) => (
                      <td key={i} style={tdStyle}>
                        {row.classWiseStudents[`class${i + 1}`]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
Dashboard.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}
export default Dashboard
