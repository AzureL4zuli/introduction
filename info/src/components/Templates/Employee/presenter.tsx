import type { NextPage } from 'next'
import PageHeader from 'components/Navigation/PageHeader'
import EmployeeTable from 'components/DataDisplay/EmployeeTable'

const EmployeeListPresenter: NextPage = () => {
  return (
    <>
      <PageHeader />
      全123件中1件～20件を表示
      <EmployeeTable />
    </>
  )
}

export default EmployeeListPresenter
