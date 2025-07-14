# React Charts Project

This project provides an interactive Pie, Bar, and Line chart implementation using React and Chart.js. It is designed to be easily integrated into other web applications.

## Features
- Pie Chart
- Bar Chart
- Line Chart
- Interactive and responsive design
- Easy integration into other React projects

## Technologies Used
- React.js
- Chart.js
- react-chartjs-2


## Installation & Setup

### Prerequisites
Ensure you have Node.js and npm/yarn installed on your machine.

### Clone the Repository
```bash
git clone https://github.com/Bellomubaraq875/React-project
cd chart-project
```

### Install Dependencies
```bash
npm install
# or
yarn install
```

### Start the Development Server
```bash
npm start
# or
yarn start
```

The application should now be running at `http://localhost:3000`.

## Chart Components
This project includes three chart components:

### Bar Chart (`bar.jsx`)
```jsx
import { BarChart } from './components/bar';

function App() {
    return <BarChart />;
}
```
The Bar Chart component uses data from `../fake_data` and renders a bar chart using `react-chartjs-2`.

### Line Chart (`line.jsx`)
```jsx
import { LineGraph } from './components/line';

function App() {
    return <LineGraph />;
}
```
The Line Chart component visualizes step counts, includes a legend, and displays a title.

### Pie Chart (`pie.jsx`)
```jsx
import { PieChart } from './components/pie';

function App() {
    return <PieChart />;
}
```
The Pie Chart component uses `ArcElement` for rendering pie slices and supports tooltip and legend functionalities.

## Integration Guide
To integrate the charts into another web application:

###  Using as a Component
1. Copy the required chart component (`bar.jsx`, `line.jsx`, or `pie.jsx`) into your project.
2. Install the necessary dependencies:
   ```bash
   npm install chart.js react-chartjs-2
   ```
3. Import and use the component in your project:
   ```jsx
   import { BarChart } from './components/bar';
   
   function App() {
       return (
           <div>
               <h1>My Dashboard</h1>
               <BarChart />
           </div>
       );
   }
   
   export default App;
   ```

## Customization
- Modify chart colors, labels, and tooltips in the respective chart components.
- Update the dataset dynamically from an API or state management system.
- Adjust styling using CSS, Tailwind, or Styled Components.

## Contributing
Feel free to submit issues or pull requests if you find any bugs or improvements!

## License
This project is licensed under the MIT License.

