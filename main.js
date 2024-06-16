const data = [
    {
      id: "geophysics",
      title: "Geophysics",
      content: `
        Geophysics applies physical methods to explore and analyze the subsurface, crucial for identifying potential oil and gas reservoirs. Key techniques include:
  
        1. Seismology
           - Seismic Wave Analysis: Seismic surveys use controlled sources to generate waves that travel through the Earth. By analyzing the reflected and refracted waves, geophysicists can create detailed images of subsurface structures.
           - 3D Seismic Imaging: Advanced techniques provide high-resolution, three-dimensional images of potential reservoirs, helping to identify the best drilling locations.
  
        2. Gravimetry
           - Gravitational Field Measurement: Variations in the Earth's gravitational field help identify subsurface density anomalies, indicating the presence of oil and gas deposits.
  
        3. Magnetometry
           - Magnetic Field Studies: Mapping variations in the Earth's magnetic field assists in understanding the geological structures that might host hydrocarbon reservoirs.
  
        4. Electromagnetic Methods
           - Resistivity and Conductivity Surveys: These methods measure the electrical properties of the subsurface, useful for identifying fluid-filled reservoirs.
      `,
      imageSrc: "assets/images/geophysics.jpg",
      alt: "Geophysics Image"
    },
    {
      id: "geology",
      title: "Geology",
      content: `
        Geology provides the foundational understanding of the Earth’s materials and processes, essential for exploring and developing oil and gas resources. Key areas include:
  
        1. Plate Tectonics
           - Basin Formation: Understanding the tectonic processes that form sedimentary basins, which are prime locations for oil and gas deposits.
           - Structural Geology: Analyzing the deformation of rocks to locate traps and folds where hydrocarbons might accumulate.
  
        2. Geochronology
           - Dating Sedimentary Layers: Using radiometric dating to establish the age of rock layers, helping to reconstruct the geological history of a basin and predict the presence of hydrocarbons.
  
        3. Mineralogy and Petrology
           - Rock Composition Analysis: Identifying the types of rocks and minerals present in a potential reservoir to assess its quality and potential productivity.
           - Phase Transitions: Studying the conditions under which hydrocarbons are generated and preserved in the subsurface.
      `,
      imageSrc: "assets/images/geology.jpg",
      alt: "Geology Image"
    },
    {
      id: "petrophysics",
      title: "Petrophysics",
      content: `
        Petrophysics focuses on the physical and chemical properties of reservoir rocks and their interactions with fluids, critical for evaluating reservoir potential. Key areas include:
  
        1. Porosity and Permeability
           - Reservoir Quality Assessment: Measuring porosity (the amount of void space in a rock) and permeability (the ability of fluids to flow through the rock) to determine the storage and flow capacity of a reservoir.
  
        2. Fluid Saturation
           - Hydrocarbon Detection: Determining the amount and distribution of hydrocarbons within the reservoir rock through well logging techniques.
  
        3. Well Logging
           - Data Acquisition: Using tools lowered into boreholes to measure the physical properties of the surrounding rock and fluids, providing detailed information about the reservoir.
      `,
      imageSrc: "assets/images/petrophysics.jpg",
      alt: "Petrophysics Image"
    },
    {
      id: "geohazard",
      title: "Geohazard",
      content: `
        Geohazards involve the assessment and mitigation of geological risks that can impact oil and gas operations. Key areas include:
  
        1. Seismic Risk Assessment
           - Earthquake Hazard Analysis: Evaluating the potential for seismic activity that could affect drilling operations and infrastructure stability.
  
        2. Slope Stability
           - Landslide and Submarine Slope Failure: Assessing risks related to landslides and underwater slope failures that could damage offshore platforms and pipelines.
  
        3. Subsurface Gas Migration
           - Hazard Identification: Identifying and managing the risks of gas migration from subsurface reservoirs to prevent blowouts and other drilling hazards.
      `,
      imageSrc: "assets/images/geohazard.jpg",
      alt: "Geohazard Image"
    },
    {
      id: "drilling",
      title: "Drilling",
      content: `
        Drilling involves the technical processes of creating boreholes to extract oil and gas. Key areas include:
  
        1. Drilling Mechanics
           - Borehole Stability: Applying principles of rock mechanics to maintain the stability of the borehole and prevent collapse.
           - Drilling Fluid Dynamics: Managing drilling fluids to optimize pressure control and cuttings removal.
  
        2. Directional Drilling
           - Precision Drilling: Using advanced techniques to drill wells at precise angles and directions to reach specific reservoir targets and maximize recovery.
  
        3. Wellbore Integrity
           - Casing and Cementing: Ensuring the structural integrity of the wellbore through proper casing and cementing practices to prevent leaks and blowouts.
      `,
      imageSrc: "assets/images/drilling.jpg",
      alt: "Drilling Image"
    },
    {
      id: "production",
      title: "Production",
      content: `
        Production encompasses the extraction and processing of hydrocarbons. Key areas include:
  
        1. Reservoir Management
           - Enhanced Oil Recovery: Applying techniques such as water flooding, gas injection, and chemical EOR to maximize hydrocarbon extraction from the reservoir.
  
        2. Flow Assurance
           - Pipeline Integrity: Ensuring the continuous and efficient flow of hydrocarbons from the reservoir to the surface and through pipelines by managing issues like hydrate formation and wax deposition.
  
        3. Production Monitoring
           - Real-time Data Analysis: Using sensors and monitoring systems to track production rates, reservoir pressure, and fluid composition, enabling optimized production strategies.
      `,
      imageSrc: "assets/images/production.jpg",
      alt: "Production Image"
    }
  ];  
// header
// document.addEventListener("DOMContentLoaded", function () {
//   const nav = document.querySelector(".body-header");
//   nav.classList.add("slide-out"); // Sembunyikan nav saat halaman dimuat

//   const toggleButton = document.getElementById("toggleButton");
//   const body = document.body;

//   toggleButton.addEventListener("click", function () {
//     body.classList.toggle("show-nav"); // Toggle show-nav class on body

//     if (nav.classList.contains("slide-out")) {
//       nav.classList.remove("slide-out");
//       nav.classList.add("slide-in");
//     } else {
//       nav.classList.remove("slide-in");
//       nav.classList.add("slide-out");
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".body-header");
  nav.classList.add("slide-out"); // Sembunyikan nav saat halaman dimuat

  const defaultClick = document.querySelector(".default");
  const closeClick = document.querySelector(".closed");
  const body = document.body;

  defaultClick.addEventListener("click", function () {
    body.classList.toggle("show-nav"); // Toggle show-nav class on body

    if (nav.classList.contains("slide-out")) {
      nav.classList.remove("slide-out");
      nav.classList.add("slide-in");
      defaultClick.style.display = "none";
      closeClick.style.display = "block";
    }
  });

  closeClick.addEventListener("click", function () {
    body.classList.toggle("show-nav");
    if (nav.classList.contains("slide-in")) {
      nav.classList.remove("slide-in");
      nav.classList.add("slide-out");
      closeClick.style.display = "none";
      defaultClick.style.display = "block";
    }
  });
});
