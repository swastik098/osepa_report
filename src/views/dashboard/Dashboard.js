import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'

import { DocsLink } from '../../components'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const random = () => Math.round(Math.random() * 100)

  return (
    <>
      <WidgetsDropdown className="mb-4" />
      {/* <CRow>
        <CCol xs={12}></CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              Bar Chart <DocsLink name="chart" />
            </CCardHeader>
            <CCardBody>
              <CChartBar
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'GitHub Commits',
                      backgroundColor: '#f87979',
                      data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                    },
                  ],
                }}
                labels="months"
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              Line Chart <DocsLink name="chart" />
            </CCardHeader>
            <CCardBody>
              <CChartLine
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(220, 220, 220, 0.2)',
                      borderColor: 'rgba(220, 220, 220, 1)',
                      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                      pointBorderColor: '#fff',
                      data: [random(), random(), random(), random(), random(), random(), random()],
                    },
                    {
                      label: 'My Second dataset',
                      backgroundColor: 'rgba(151, 187, 205, 0.2)',
                      borderColor: 'rgba(151, 187, 205, 1)',
                      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                      pointBorderColor: '#fff',
                      data: [random(), random(), random(), random(), random(), random(), random()],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              Doughnut Chart <DocsLink name="chart" />
            </CCardHeader>
            <CCardBody>
              <CChartDoughnut
                data={{
                  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                  datasets: [
                    {
                      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                      data: [40, 20, 80, 10],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              Pie Chart <DocsLink name="chart" />{' '}
            </CCardHeader>
            <CCardBody>
              <CChartPie
                data={{
                  labels: ['Red', 'Green', 'Yellow'],
                  datasets: [
                    {
                      data: [300, 50, 100],
                      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              Polar Area Chart
              <DocsLink name="chart" />
            </CCardHeader>
            <CCardBody>
              <CChartPolarArea
                data={{
                  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                  datasets: [
                    {
                      data: [11, 16, 7, 3, 14],
                      backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              Radar Chart <DocsLink name="chart" />
            </CCardHeader>
            <CCardBody>
              <CChartRadar
                data={{
                  labels: [
                    'Eating',
                    'Drinking',
                    'Sleeping',
                    'Designing',
                    'Coding',
                    'Cycling',
                    'Running',
                  ],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'rgba(220, 220, 220, 0.2)',
                      borderColor: 'rgba(220, 220, 220, 1)',
                      pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                      pointBorderColor: '#fff',
                      pointHighlightFill: '#fff',
                      pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                      data: [65, 59, 90, 81, 56, 55, 40],
                    },
                    {
                      label: 'My Second dataset',
                      backgroundColor: 'rgba(151, 187, 205, 0.2)',
                      borderColor: 'rgba(151, 187, 205, 1)',
                      pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                      pointBorderColor: '#fff',
                      pointHighlightFill: '#fff',
                      pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                      data: [28, 48, 40, 19, 96, 27, 100],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic
              </h4>
              <div className="small text-body-secondary">January - July 2023</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {progressExample.map((item, index, items) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === items.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard> */}
    </>
  )
}

export default Dashboard
