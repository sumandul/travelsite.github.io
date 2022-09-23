import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Trip from '../Components/tripList/Trip'
import axios from 'axios'
import $ from 'jquery'

const DetailSlug = () => {
  const { slug } = useParams()
  const [page, setPage] = useState()
  useEffect(() => {
    const response = axios.get('/api/menudetail/' + slug).then(({ data }) => {
      setPage(data)
    })
  }, [slug])
  // console.log(page, 'menu-content')
  // $(document).on('change', 'select[name="suman"]', function () {
  //   alert($(this).val())
  // })

  return (
    <>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: [page?.content] }} />
      </Container>
    </>
  )
}
export default DetailSlug
