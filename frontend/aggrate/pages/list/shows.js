import { React, useRef } from 'react'
import { useRouter } from 'next/router'

export default function list () {
    const router = useRouter()
  console.log(router.query);
    return (
      <table>
      <tr>
        <th>Name</th>
        <th>Reviews</th>
        <th>Ratings</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>{router.query.searchInput}</td>
        <td>{router.query.searchInput}</td>
        <td>{router.query.searchInput}</td>
        <td>{router.query.searchInput}</td>

      </tr>
    </table>
    )
}