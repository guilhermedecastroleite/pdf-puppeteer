import logo from './logo.svg';
import Chart from './components/Chart';

const chartData = [
  {
    name: 'Item 1',
    value: 51.1,
  },
  {
    name: 'Item 2',
    value: 28.9,
  },
  {
    name: 'Item 3',
    value: 20,
  },
  {
    name: 'Item 4',
    value: 70.1,
  },
  {
    name: 'Item 5',
    value: 34.7,
  },
]

function App() {
  return (
    <div
      style={{
        width: '209.55mm',
        height: '298.45mm',
        padding:'12mm',
        backgroundColor: '#FFF',
      }}
    >
      {/** Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div>
          <h1>Data Report</h1>
          <h2>{new Date().getYear() + 1900}</h2>
        </div>
        <img src={logo} className="App-logo" alt="logo" style={{ width: '50mm', height: '50mm'}}/>
      </div>

      {/** Introduction text */}
      <h3>Introduction</h3>
      <h5 style={{ fontWeight: 'normal' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Ut eu sem integer vitae. Bibendum neque egestas congue quisque egestas diam in. Quis lectus nulla at volutpat diam. Cursus euismod quis viverra nibh. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Nibh sed pulvinar proin gravida hendrerit lectus a. Purus in massa tempor nec feugiat nisl pretium. Velit dignissim sodales ut eu sem integer vitae justo eget. Augue ut lectus arcu bibendum at varius. Interdum varius sit amet mattis vulputate enim. In hendrerit gravida rutrum quisque non tellus orci. Lectus nulla at volutpat diam ut venenatis. Massa tempor nec feugiat nisl pretium fusce id velit ut. Aliquet sagittis id consectetur purus ut faucibus. Eget mi proin sed libero enim.
      </h5>

      {/** Chart with title */}
      <h3>Chart 01</h3>
      <Chart
        data={chartData}
        barProps={{
          isAnimationActive: false,
        }}
      />

      {/** Info text */}
      <h5 style={{ fontWeight: 'normal' }}>
        Pulvinar pellentesque habitant morbi tristique senectus et netus. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Enim ut tellus elementum sagittis vitae et leo duis ut. Adipiscing vitae proin sagittis nisl. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Platea dictumst vestibulum rhoncus est pellentesque. Dictum sit amet justo donec enim diam vulputate. Libero volutpat sed cras ornare arcu dui. Magna fermentum iaculis eu non diam.
      </h5>

      {/** Chart with title */}
      <h3>Chart 02</h3>
      <Chart
        data={chartData}
        barProps={{
          isAnimationActive: false,
        }}
      />
    </div>
  );
}

export default App;
