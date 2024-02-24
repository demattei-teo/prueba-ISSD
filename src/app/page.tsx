'use client'

import { Table } from '@/components'
import getCareers from '@/services/get-careers/getCareers'

function Home() {
  getCareers()
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  return <Table />
}

export default Home
