const express = require('express');
const cors = require('cors');  // Import cors

const app = express();
const port = 3000;

app.use(cors({
    origin: '*',  // Frontend Origin
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type'] 
  }));

app.get('/search', async (req, res) => {
    const keyword = req.query.keyword.trim().toLowerCase();
    const facultyData = [
        {
            name: "Hadiseh Alaeian",
            research: "My research focuses on hybrid, scalable, and integrated photonic quantum technologies. In particular, I am interested in theoretical and experimental investigations of interacting and correlated open quantum optical systems. We engineer light-matter interactions and employ highly excited Rydberg states to create large optical non-linearity, which leads to exotic states of light required for many different quantum technologies based on photons.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=242740"
        },
        {
            name: "Muhammad Ashraful Alam",
            research: "Physics of electronic, optoelectronic, and bioelectronic devices, transport in inhomogeneous systems, reliability limits of CMOS devices, computational modeling",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3171"
        },
        {
            name: "Dionysios Aliprantis (area chair)",
            research: "electric machines and drives, power systems, integration of renewable energy sources, electric transportation, smart grids",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=92117"
        },
        {
            name: "Jan P. Allebach",
            research: "Electronic imaging systems, image capture and rendering, color image processing, image quality, document imaging",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3043"
        },
        {
            name: "Joerg Appenzeller",
            research: "Device and transport physics of low-dimensional systems, experimental verification of novel device concept for improved transistor performance, exploration of nano-materials and nano-interfaces for future nanoelectronics applications",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=32402"
        },
        {
            name: "Santokh Badesha",
            research: "Image generation and processing, Intellectual property generation and management, corporate partnerships",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=242059"
        },
        {
            name: "Saurabh Bagchi (area chair)",
            research: "Dependable distributed systems, secure autonomy, embedded wireless networks, predictable machine learning.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3261"
        },
        {
            name: "Mark R. Bell",
            research: "Information theory, communication theory and systems, radar systems and signal processing, signal theory, free-space optical communications",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3137"
        },
        {
            name: "Peter Bermel (area chair)",
            research: "Several applications of nanophotonics, including photovoltaics, lighting, thermal physics, sources, detectors, and switches.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=75045"
        },
        {
            name: "Sunil A. Bhave",
            research: "MEMS",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=122298"
        },
        {
            name: "Alexandra Boltasseva",
            research: "Nanophotonics, nanofabrication, plasmonics, metamaterials, integrated <br> optics, sensing",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=46150"
        },
        {
            name: "Charles A. Bouman",
            research: "Image processing, statistical image modeling, pattern recognition, image printing and display, tomography and inverse problems, medical imaging.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2889"
        },
        {
            name: 'Mireille "Mimi" Boutin',
            research: "Computer vision and image processing, automatic language translation, mobile device applications, interdisciplinary research, computational and applied mathematics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3165"
        },
        {
            name: "Christopher Brinton",
            research: "data science, network optimization, fog and edge computing, social learning networks, online social networks, machine learning, signal processing, communication and information theory",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=218378"
        },
        {
            name: "Aaron Brovont",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=256041"
        },
        {
            name: "Michael A. Capano",
            research: "Wide band gap semiconductors, semiconductor fabrication processes, <br> chemical vapor deposition, defects in semiconductors, high-resolution <br> x-ray diffraction, graphene, ion implantation, structural characterization",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3156"
        },
        {
            name: "Stanley Chan (area chair)",
            research: "image restoration, computational photography, photon limited imaging, statistical signal processing",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=111901"
        },
        {
            name: "Arnold Chung-Ye Chen",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=159402"
        },
        {
            name: "Yaobin Chen",
            research: "Intelligent transportation systems, automated vehicles, EV and HEV, intelligent controls and robotics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=296665"
        },
        {
            name: "Yong Chen",
            research: "Condensed matter physics (experimental); atomic, molecular and optical physics (experimental); nanoscience and nanotechnology",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=34991"
        },
        {
            name: "Zhihong Chen",
            research: "Exploration of physical properties of nano-materials; control and manipulation of material properties to fit the needs of nano-electronic applications; designing and fabricating novel nano-devices and circuits for various application fields.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=66392"
        },
        {
            name: "Yaobin Chen",
            research: "Intelligent transportation systems, automated vehicles, EV and HEV, intelligent controls and robotics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=296665"
        },
        {
            name: "Weng C. Chew",
            research: "Electromagnetics, fast and efficient computational algorithms for solving electromagnetic scattering and multiphysics problems",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=173044"
        },
        {
            name: "Mung Chiang",
            research: "Optimization of networks, network utility maximization, network function optimization, Fog networking and the Internet of Things, Smart data pricing and network economics, Social learning networks and online social networks",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=171238"
        },
        {
            name: "Mary Comer",
            research: "Video compression, scalable video coding, medical imaging, image and video processing",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=8864"
        },
        {
            name: "Meng Cui",
            research: "Neurophotonics, In vivo imaging, High-throughput and high-quality imaging, Drug discovery, Wavefront engineering.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=121778"
        },
        {
            name: "Keerthi Priya Dasala",
            research: "Design and experimental analysis of architectures, protocols, and applications for Next-Generation Wireless Communication and Sensing systems with a focus on Millimeter-wave and Terahertz networks, Internet of Things, robotic wireless networks, AI/ML for network management and control, and wireless security. On these topics, I lead the WISDOM lab at Purdue, spanning multi-disciplinary wireless systems research.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=291532"
        },
        {
            name: "Supriyo Datta",
            research: "Spin electronics, nanoscale energy conversion, molecular electronics and mesoscopic superconductivity",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3286"
        },
        {
            name: "James Davis",
            research: "I study the engineering of computing systems, writ broad. My primary interests are in software correctness, security, and usability. I apply a socio-technical philosophy &#8211; high-quality systems must be engineered using both human and technical perspectives. I am an empiricist; I always strive to measure the practical impact of problems and solutions.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=242045"
        },
        {
            name: "Edward J. Delp",
            research: "Image processing, image and video compression, information security, multimedia systems, medical imaging, computer vision, communication and information theory",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2632"
        },
        {
            name: "Rosa Diaz Rivas",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=149835"
        },
        {
            name: "Yi Ding",
            research: "Machine Learning for Systems, Computer Systems, Computer Architecture, Cloud Computing, Machine Learning",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=285937"
        },
        {
            name: "Daniel S. Elliott",
            research: "Nonlinear optics, multiphoton processes, photoionization, competition between optical processes, coherent control, atomic coherence",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2925"
        },
        {
            name: "Okan K. Ersoy",
            research: "Digital signal/image processing and imaging, neural networks, decision trees and support vector machines, optical communications, networking and information processing, diffractive optics with scanning electron microscope, Fourier-related transforms and time-frequency methods, probability and statistics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3180"
        },
        {
            name: "Steve France",
            research: "Software engineering practices, processes and management; quality assurance; system design and integration; team leadership; defense acquisition programs; unmanned systems; teaching and mentoring.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=284993"
        },
        {
            name: "Jing Gao",
            research: "Data and information analysis with a focus on data mining. In particular, I am interested in information veracity analysis, crowdsourcing, knowledge graphs, multi-source data analysis, anomaly detection, transfer learning, text mining, data stream mining as well as various data mining applications in healthcare, bioinformatics, social science, transportation, cyber security and education.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=246669"
        },
        {
            name: "Saul B. Gelfand",
            research: "Digital communications, statistical signal processing, optimization and pattern recognition",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3255"
        },
        {
            name: "Arif Ghafoor",
            research: "Multimedia systems, databases, distributed computing systems, broadband multimedia networking",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2827"
        },
        {
            name: "Mahsa Ghasemi",
            research: "Task-Oriented Knowledge Acquisition and Reasoning; Online Learning and Control; Human-Robot Interaction; Trustworthy Artificial Intelligence; Socially and Ethically Beneficial Autonomy",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=256126"
        },
        {
            name: "Zahra Ghodsi",
            research: "Trustworthy machine learning, applied cryptography",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=270860"
        },
        {
            name: "Robert L. Givan",
            research: "Artificial intelligence, adaptive decision-making for computer networks, decision-theoretic planning, machine learning, knowledge representation, automated reasoning, Markov decision processes",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3234"
        },
        {
            name: "Luis Gomez",
            research: "Electromagnetics, computational analysis, design, and uncertainty quantification of electromagnetic brain stimulation devices, bio-electromagnetics, fast-algorithms, and applied computational electromagnetics.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=242048"
        },
        {
            name: "Qi Guo",
            research: "Computational imaging, computer vision, machine learning, optics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=256878"
        },
        {
            name: "Sumeet Gupta",
            research: "Device-circuit co-design in emerging nanotechnologies for Boolean and non-Boolean computing, spintronics, low power variation tolerant VLSI design, device-circuit modeling.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=185139"
        },
        {
            name: "Vijay Gupta",
            research: "Intersection of control theory and machine learning, Distributed estimation and decision making, Cyber-physical-human systems, Signal processing, Game theory, Power grid, Transportation networks",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=267567"
        },
        {
            name: "Abolfazl Hashemi",
            research: "Large-Scale Optimization for AI and ML, Learning at the Edge, and Decision-Making under Uncertainty.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=255728"
        },
        {
            name: "Jianghai Hu",
            research: "Hybrid systems; multi-agent systems; control of uncertain systems; control applications (e.g. in sensor networks and energy efficient building management); general control and optimization theory",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3061"
        },
        {
            name: "Y. Charlie Hu",
            research: "Distributed systems, operating systems, networking, parallel computing",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3351"
        },
        {
            name: "Muhammad Hussain",
            research: "mmh Lab (Device Research Engineering Applications and Manufacturing: DREAM) designs and develops futuristic electronics focusing on a broad range of applications such as healthcare, environment, energy, robotics, space and defense applications. They use state-of-the-art CMOS technology to ensure rapid and volume manufacturing of these semiconductor electronics. These IoT and IoE devices are standalone multifunctional integrated systems which are either physically rigid or physically flexible, stretchable and reconfigurable.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=270676"
        },
        {
            name: "Nak-seung Patrick Hyun",
            research: "A cyclic learning between biology, mathematical system theory, and robotics with an emphasis on Control Theoretic Bio-Inspired Robotics. Bio-inspired Robotics; Flapping-Wing Vehicles ; Safety-Critical Nonlinear Control ; Adaptive Control; Impulsive Systems ; Contraction Theory ; Geometric Control; Optimal Motion Planning ; Swarm Robotics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=274917"
        },
        {
            name: "David I. Inouye",
            research: "Trustworthy machine learning, distribution matching, distribution shift, explainable AI",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=218058"
        },
        {
            name: "Zubin Jacob",
            research: "Quantum Vacuum, Quantum Photonics, Energy and Thermal",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=125866"
        },
        {
            name: "Leah H. Jamieson",
            research: "Engineering education, engineering and society, public understanding of engineering",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3106"
        },
        {
            name: "David B. Janes",
            research: "Nanoscale electronic devices, molecular/semiconductor devices, microwave devices and characterization",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2934"
        },
        {
            name: "Brent Jesiek",
            research: "History and social studies of electrical engineering and computer engineering, <br> open source software and hardware, history of embedded devices and systems, <br> software and hardware development methodologies, global engineering education, <br> engineering education research",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=45642"
        },
        {
            name: "Dan Jiao",
            research: "Computational electromagnetics, applied electromagnetics, high frequency VLSI circuit design and analysis, high-performance VLSI CAD, fast and high-capacity numerical methods, scattering and antenna analysis, microwave and millimeter wave circuits, and bio-electromagnetics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=8945"
        },
        {
            name: "Dr. Mark Johnson",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3130"
        },
        {
            name: "Byunghoo Jung",
            research: "Circuits and systems for wireless sensing",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=8942"
        },
        {
            name: "Avinash C. Kak",
            research: "Sensor and Camera Networks, High-Level Programming Languages, Software Engineering, Computer and Network Security",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2833"
        },
        {
            name: "Vassilis Kekatos",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=285947"
        },
        {
            name: "Alexander Kildishev",
            research: "Modeling of nanophotonics devices, optical metamaterials and transformation optics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2797"
        },
        {
            name: "Kwang Taik Kim",
            research: "Wireless communications, information and coding theory, signal processing, interference management, large-scale distributed computing, edge networking and computing, and machine learning in the realms of wireless system design",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=243261"
        },
        {
            name: "Younghyun Kim",
            research: "Embedded computing systems, Internet-of-Things, System-on-chip and VLSI, Low-power systems",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=293362"
        },
        {
            name: "Gerhard Klimeck",
            research: "Nanoelectronic device analysis and synthesis, genetic algorithm based optimization, high performance computing, engineering tool development",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3010"
        },
        {
            name: "Murat Kocaoglu",
            research: "Causal inference, machine learning, generative adversarial networks, information theory, and learning theory.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=249620"
        },
        {
            name: "Cheng-Kok Koh",
            research: "Computer Aided Design (CAD) for Very Large-Scale Integration (VLSI)",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2895"
        },
        {
            name: "James V. Krogmeier",
            research: "Signal processing for wireless communications, adaptive filtering and equalization, synchronization, modulation and coding for nonlinear channels, intelligent transportation systems",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3040"
        },
        {
            name: "Tillmann Kubis",
            research: "Transport modeling of charge, heat and spin on nanometer length scale in semiconductors, 2D materials and topological insulators for optoelectronics, logic devices and sensor applications. High performance computing implementations of quantum transport models. Generalizing the application space of the nonequilibrium Green's function method.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=164638"
        },
        {
            name: "Milind Kulkarni",
            research: "Programming languages, compilers and runtime systems for multicore processors. Performance modeling of parallel programs. Parallelism in irregular algorithms.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=55852"
        },
        {
            name: "C. S. George Lee",
            research: "Robotics, neural fuzzy systems, skills learning",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2910"
        },
        {
            name: "Woongkul Matt Lee",
            research: "High-performance motor drive, power electronics, electric machines, and distributed energy resources",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=302765"
        },
        {
            name: "James S. Lehnert",
            research: "Communication theory, information theory, spread spectrum signaling, packet radio systems, fading communication channels, channel equalization techniques, signal design and coding",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3037"
        },
        {
            name: "Haitong Li",
            research: "Nanoelectronic devices, integrated circuits, nanotechnology-inspired AI hardware",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=270857"
        },
        {
            name: "Husheng Li",
            research: "Wireless communications, statistical signal processing, cyber physical systems, autonomous and connected systems",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=270776"
        },
        {
            name: "Junfei Li",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=270981"
        },
        {
            name: "Lingxi Li",
            research: "Modeling, analysis, control, and optimization of complex systems, connected and automated vehicles, intelligent transportation systems, discrete event dynamic systems, human-machine interaction, parallel intelligence",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=296655"
        },
        {
            name: "Tongcang Li",
            research: "Quantum photonics, Quantum optomechanics, cold atoms, Brownian motion",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=112557"
        },
        {
            name: "Xiaojun Lin",
            research: "Network as a large system. Resource allocation, control, routing, security, and cross-layer design for wireless and wireline communication networks",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=5577"
        },
        {
            name: "Chaoyue Liu",
            research: "Mathematical Foundation of deep learning, deep learning theory, optimization",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=299162"
        },
        {
            name: "David J. Love",
            research: "Communication theory, information theory, feedback in communication systems, multiple-input multiple-output (MIMO) wireless systems, Grassmannian subspace packing, massive MIMO communications, distributed MIMO, millimeter wave communications, signal processing to minimize EM exposure",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2946"
        },
        {
            name: "Yung-Hsiang Lu",
            research: "Mobile and cloud computing, energy-efficient computing, image and video processing",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3355"
        },
        {
            name: "Mark S. Lundstrom",
            research: "Semiconductor device physics, change carrier transport, computational electronics, <br> physics and limits of nanotransistors",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3140"
        },
        {
            name: "Aravind Machiry",
            research: "My primary research area is system and software security. I lead Purdue Systems and Software Security Lab (PurS3) with the goal of securing modern systems by providing principled yet practical solutions to various security problems.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=248800"
        },
        {
            name: "Joseph Makin",
            research: "Mathematical neuroscience and neural computation; brain-machine interfaces in humans and animals; machine learning and control, especially as they relate to neuroscience",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=242786"
        },
        {
            name: "Anuran Makur",
            research: "Theory of machine learning, combinatorial statistics, information theory",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=258037"
        },
        {
            name: "Michael Manfra",
            research: "Non-Abelian phases in the fractional Quantum Hall regime, Engineering GaAs heterostructures for high fidelity spin qubits, Quantum computing with Majorana fermions in hybrid semiconductor/superconductor systems",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=52062"
        },
        {
            name: "Jason D. McKinney",
            research: "Microwave photonics systems and applications including folding receivers, direction-finding, interference mitigation, beamforming, sensing, and waveform generation.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=257064"
        },
        {
            name: "Michael R. Melloch",
            research: "Semiconductor physics, molecular beam epitaxy, heterostructures, superlattices, ultra-small devices",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3162"
        },
        {
            name: "Saeed Mohammadi",
            research: "High-speed and low-power electronics, 3-D integration, nanotechnology, <br> novel semiconductor devices, reconfigurable systems",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3246"
        },
        {
            name: "Dallas Morisette",
            research: "Solid state device physics, MOS interface physics, wide bandgap materials and devices, power semiconductor devices, silicon carbide devices.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=77034"
        },
        {
            name: "Evgenii Narimanov",
            research: "Negative Index (Meta) materials, <br> Optical systems with ray-chaotic dynamics, <br> Information-theoretical description of nonlinear fiber-optical systems, <br> Non-linear dynamics.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=28040"
        },
        {
            name: "Ryan Newton",
            research: "Programming languages, compilers. Parallel programming and runtime systems. Operating systems, containers, reproducible computing and debugging technologies.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=247461"
        },
        {
            name: "Philip E. Paré",
            research: "Mathematical modeling of dynamic networked systems, e.g. epidemiological, biological, economic systems, infrastructure networks, social networks, etc.; stability analysis, control, and identifiability of such systems; model reduction of dynamic systems and clustering; biological applications of control theory",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=236400"
        },
        {
            name: "Brooke Parks",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=125121"
        },
        {
            name: "Steven D. Pekarek",
            research: "Analysis, design, and control of electric machines, power electronics, and power electronic based systems.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3276"
        },
        {
            name: "Dimitrios Peroulis",
            research: "Microwave and millimeter-wave integrated circuits and antennas; RF MEMS (switches, varactors, inductors); novel architectures for multifunctional RF front-ends including tunable filters, antennas, matching networks and power amplifiers; high frequency 3D interconnects; nano-electro-mechanical resonators, RF/Bio sensors",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2967"
        },
        {
            name: "Irith Pomeranz",
            research: "Test generation, design-for-testability, built-in self-test and diagnosis of integrated circuits.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3028"
        },
        {
            name: "Minghao Qi",
            research: "Nanotechnology, especially 3D nanofabrication and low-cost nanolithography; micro and nanophotonics, with emphasis on 3D photonic crystals and integrated Si photonic circuits; thermophotovoltaics and solar cells",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=8861"
        },
        {
            name: "Junjie Qin",
            research: "Control, optimization, market design, and data analytics applied to power systems and the energy-transportation nexus",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=246563"
        },
        {
            name: "Qiang Qiu",
            research: "Computer vision and machine learning, specifically on deep learning, image understanding, representation learning.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=238920"
        },
        {
            name: "Xiaokang Qiu",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=145120"
        },
        {
            name: "Vijay Raghunathan",
            research: "Hardware and software architectures for embedded computing systems, <br> system-on-chip design, and wireless sensor networks with an emphasis <br> on low-power design, reliable system design, and environmental energy <br> harvesting.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=24522"
        },
        {
            name: "Anand Raghunathan (area chair)",
            research: "System-on-chip (SoC) architecture and design methodologies, <br> Application-specific and domain-specific VLSI processing architectures, <br> Embedded systems, Low-power design, Information security and trust in <br> embedded system and SoC design, Electronic design automation.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=46143"
        },
        {
            name: "Karthik Ramani",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=12331"
        },
        {
            name: "Sanjay Rao",
            research: "Computer Networking, Internet Architecture and Protocols, Software-Defined Networking, Cloud Computing, Smartphone Systems, Enterprise Networking",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3252"
        },
        {
            name: "Amy Reibman",
            research: "Image and video quality estimation, video transport over networks, video analytics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=117177"
        },
        {
            name: "Timothy Rogers",
            research: "Computer architecture, hardware accelerators, software systems, compilers and hardware/software co-design.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=134165"
        },
        {
            name: "Thomas Roth",
            research: "Modeling of classical and quantum electromagnetic systems, multiscale and multiphysics modeling, applied electromagnetics.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=246666"
        },
        {
            name: "Kaushik Roy",
            research: "AI algorithms and hardware, neuromorphic computing, low-power electronics, neuro-mimetic devices, design-technology/ system-technology co-design",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3085"
        },
        {
            name: "Gesualdo Scutari",
            research: "Decentralized optimization and information processing, statistical machine learning algorithms, mathematical optimization theory/methods and (engineering) applications, game theoretical models/algorithms and (engineering) applications",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=126294"
        },
        {
            name: "Shreyas Sen",
            research: "Sensing and Communication Circuits/Systems, Energy-harvested Sensor nodes for Internet of Things (IoT), Analog/RF, Wireless, Security, Human body-coupled Communication",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=134162"
        },
        {
            name: "Ali Shakouri",
            research: "Quantum electronics, nano and microscale heat and current transport in semiconductor devices, thermoelectric/thermionic energy conversion, submicron thermal imaging, micro refrigerators on a chip and novel optoelectronic integrated circuits.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=74115"
        },
        {
            name: "Vladimir M. Shalaev",
            research: "Optical properties of nanostructured materials, nonlinear optics and spectroscopy, mesoscopic physics, quantum electronics and optoelectronics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3322"
        },
        {
            name: "Vishal Shrivastav",
            research: "Computer networks, in particular, problems at the intersection of networks, systems, and hardware architecture.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=246663"
        },
        {
            name: "Jeffrey M. Siskind",
            research: "Artificial intelligence, cognitive science, computational linguistics, machine vision, programming languages, visual event perception, child language acquisition, optimizing compilers for mostly-functional programming languages, programming environments, robotics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3055"
        },
        {
            name: "Lu Su",
            research: "Internet of things, cyber-physical systems, wireless, mobile, and crowd sensing systems, big data and cloud computing, data mining and machine learning, security and privacy.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=246660"
        },
        {
            name: "Scott D. Sudhoff",
            research: "Power electronics, electromechanical devices, power electronics based power distribution and propulsion systems, evolutionary optimization, power magnetics, applied control, marine engineering",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3265"
        },
        {
            name: "Shreyas Sundaram (area chair)",
            research: "Network science, robustness and resilience of complex networks and systems, dynamics on networks, fault-tolerant and secure control, distributed and decentralized control, graph theory",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=117180"
        },
        {
            name: "Hong Z. Tan",
            research: "Haptic interfaces, distributed contact sensing, Haptic rendering, psychophysics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3022"
        },
        {
            name: "Mithuna S. Thottethodi",
            research: "Computer Architecture, Interconnection Networks, Distributed Systems",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3168"
        },
        {
            name: "Santiago Torres Arias",
            research: "Computer systems security, software supply chain security, and distributed system security. Applied cryptography and password storage mechanisms.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=238320"
        },
        {
            name: "Vishrant Tripathi",
            research: "Modeling, analysis and design of communication networks, with emphasis on wireless and real-time networks. Scheduling problems in networked control systems, robotics and federated learning.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=302023"
        },
        {
            name: "Pramey Upadhyaya (area chair)",
            research: "magnetism, classical and quantum spintronics, next-generation information processing & bio-devices",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=182798"
        },
        {
            name: "T. N. Vijaykumar",
            research: "Computer architecture",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3293"
        },
        {
            name: "Phillip Walter",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=255841"
        },
        {
            name: "Chih-Chun Wang",
            research: "Coding theory, network coding, analysis of iterative decoding, information theory and optimal decision and control",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=12670"
        },
        {
            name: "Haiyan Wang",
            research: "Prof. Wang specializes in the design and processing of functional nanocomposite thin films for microelectronics, optoelectronics, high-temperature superconductors, solid oxide fuel cells, plasmonics and photonics, ferroelectric and ferromagnetic applications, and radiation tolerance materials. She has published over 460 journal articles (citation 16000 times, H-index of 59) and presented over 250 invited and contributed talks at various international conferences. Wang holds 10 patents in the areas of thin film processing and architectures and is a Fellow of ASM International, ACerS, AAAS and APS.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=139178"
        },
        {
            name: "Jingbo Wang",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=287003"
        },
        {
            name: "Xiaoqian (Joy) Wang",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=221122"
        },
        {
            name: "Kevin J. Webb",
            research: "Biophotonics, imaging, nanophotonics, metamaterials, electromagnetics, and solid state devices",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3097"
        },
        {
            name: "Dana Weinstein",
            research: "RF MEMS, electromechanical resonators and transducers for wireless communication, signal processing, and sensors.",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=124038"
        },
        {
            name: "Jenna Wise DiVincenzo",
            research: "Software verification, formal methods, programming languages, software engineering",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=285942"
        },
        {
            name: "George R. Wodicka",
            research: "Biomedical acoustics, speech acoustics, acoustic modeling, biomedical signal processing, acoustic biosensors, medical instrumentation",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3004"
        },
        {
            name: 'Peide "Peter" Ye',
            research: "Semiconductor physics and devices, Nano-structures and nano-fabrications, Quantum/spin-transport, Atomic layer deposition, High-k/III-V device integration, High-performance III-V MOSFETs, high-k/graphene integration, High-performance graphene FETs, Graphene spintronics",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3198"
        },
        {
            name: "Stanislaw H. Zak",
            research: "Control, optimization, nonlinear systems, neural networks, fuzzy logic control",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3272"
        },
        {
            name: "Fengqing Maggie Zhu",
            research: "Image processing and analysis, video compression, computer vision and computational photography",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=117183"
        },
        {
            name: "Carla Zoltowski",
            research: "Empty",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=2874"
        },
        {
            name: "Michael D. Zoltowski",
            research: "Wireless & mobile communication systems, smart antennas, space-time adaptive processing, multipath channel identification & equalization, interference suppression for TDMA and CDMA cellular systems, space-time coding, Jammer cancellation for GPS",
            link: "https://engineering.purdue.edu/ECE/People/ptProfile?resource_id=3159"
        }
    ];


    //const regex = new RegExp(`\\b${keyword}\\b`, 'i'); // whole word search

    //const filteredResults = facultyData.filter(faculty => regex.test(faculty.research.toLowerCase()));

    //const filteredResults = facultyData.filter(faculty => faculty.research.toLowerCase().includes(keyword));

    const highlightedResults = facultyData
        .filter(faculty => faculty.research.toLowerCase().includes(keyword))
        .map(faculty => {
            const regex = new RegExp(`(${keyword})`, 'gi');
            const highlightedResearch = faculty.research.replace(regex, "<mark>$1</mark>"); // highlight keyword
            return {
                ...faculty,
                research: highlightedResearch
            };
        });

    res.json(highlightedResults);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});