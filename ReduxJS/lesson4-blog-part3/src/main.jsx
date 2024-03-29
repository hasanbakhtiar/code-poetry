import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import './sass/style.scss';
import { addBlog } from './tools/action/blogAction';
import configureStore from './tools/store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
const store = configureStore();



store.subscribe(()=>{
  console.log(store.getState());
})


store.dispatch(addBlog({title:'The Rise of Edge Computing: Revolutionizing Data Processing',img:'https://532386f9a72d1dd857a8-41058da2837557ec5bfc3b00e1f6cf43.ssl.cf5.rackcdn.com/wp-content/uploads/2021/06/edge-cdn-Depositphotos_264657086_s-2019-1000x640.jpg',desc:"Edge computing is transforming the way data is handled in the digital landscape. Unlike traditional cloud computing, which relies on centralized servers, edge computing brings processing power closer to where data is generated, such as IoT devices, sensors, and local networks. This decentralization reduces latency, enhances real-time data analysis, and improves overall system efficiency. As industries increasingly rely on instantaneous insights for critical decision-making, the adoption of edge computing is poised to skyrocket, ushering in a new era of faster, more responsive technology infrastructure."}))
store.dispatch(addBlog({title:'Quantum Computing: Unlocking Unprecedented Computational Power',img:'https://try.poopourri.com/img/the-rise-of-quantum-computing.jpg',desc:"Quantum computing represents a paradigm shift in computational capabilities. Unlike classical computers that rely on binary bits (0s and 1s), quantum computers use quantum bits or qubits, which can exist in multiple states simultaneously. This unique property enables quantum computers to perform complex calculations at an exponentially faster rate, potentially solving problems that are currently intractable for classical computers. While still in the early stages of development, quantum computing holds immense promise for revolutionizing fields such as cryptography, drug discovery, optimization, and artificial intelligence."}))
store.dispatch(addBlog({title:'Augmented Reality in Education: Transforming Learning Experiences',img:'https://www.doradolearning.com/wp-content/uploads/2020/11/Academics_K12-scaled.jpg',desc:"Augmented reality (AR) is reshaping the education landscape by offering immersive and interactive learning experiences. By overlaying digital content onto the physical world, AR technology enhances engagement and comprehension across various subjects. Students can visualize complex concepts, conduct virtual experiments, and explore historical events in a way that traditional textbooks cannot match. Moreover, AR enables personalized learning experiences tailored to individual student needs, fostering a more dynamic and inclusive educational environment. As AR continues to evolve, its integration into classrooms worldwide is poised to redefine the future of education."}))
store.dispatch(addBlog({title:'tBlockchain Beyond Cryptocurrency: Driving Innovation Across Industriesest4',img:'https://media.licdn.com/dms/image/D4D12AQHhWfQkzG9xiA/article-cover_image-shrink_720_1280/0/1679411636821?e=2147483647&v=beta&t=-APxe_Qm_SKFX62stJMSfg-24qV78Re2VkAy5zm-5EM',desc:"While blockchain technology initially gained prominence as the backbone of cryptocurrencies like Bitcoin, its potential extends far beyond digital currencies. Blockchain offers a decentralized and immutable ledger system that enhances transparency, security, and efficiency in various industries. From supply chain management and healthcare to finance and voting systems, blockchain solutions are revolutionizing processes by streamlining transactions, reducing fraud, and enabling trustless interactions. As businesses and governments recognize the transformative power of blockchain, its adoption is expected to accelerate, paving the way for a more secure and decentralized future."}))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
