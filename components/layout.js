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
          background: rgb(238,174,202);
          background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
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
