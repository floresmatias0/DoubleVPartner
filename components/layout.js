const Layout = ({children}) => {
  return (
    <div>
      <nav>
        <h1>Search Profile in Github</h1>
      </nav>
      {children}
      <style jsx global>
      {`
        html,
        body{
          margin: 0;
          padding: 0;
        }
      `}
      </style>
      <style jsx>
      {`
        div{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
      </style>
    </div>
  )
}

export default Layout;
