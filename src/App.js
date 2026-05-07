
export default function Dashboard() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f172a',
      color: 'white',
      padding: '40px',
      fontFamily: 'Arial'
    }}>
      <h1 style={{fontSize: '42px'}}>WK Modern Dashboard</h1>
      <p style={{color: '#94a3b8', marginTop: '10px'}}>
        Responsive JavaScript Dashboard UI
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
        gap: '20px',
        marginTop: '40px'
      }}>
        {[
          {title:'Revenue', value:'$24,500'},
          {title:'Orders', value:'1,248'},
          {title:'Customers', value:'8,392'},
          {title:'Products', value:'542'},
        ].map((item)=>(
          <div key={item.title} style={{
            background:'#1e293b',
            padding:'25px',
            borderRadius:'20px'
          }}>
            <h3>{item.title}</h3>
            <h2 style={{fontSize:'32px'}}>{item.value}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
