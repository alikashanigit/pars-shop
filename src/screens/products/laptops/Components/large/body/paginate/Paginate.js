import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, page }) => {
  return (
    pages > 1 && (
      <Pagination style={{ 
        direction: 'ltr',
        display: 'flex',
        
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
          style={{ 
            fontFamily: 'sflight',
          }}
            key={x + 1}
            to={`/page/${x + 1}`}
          >
            <Pagination.Item
            style={{ 
              backgroundColor: 'green',
            }}
            active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate