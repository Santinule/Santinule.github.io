import React, { useState } from 'react';
import doc2tableLogo from '../assets/proj_images/doc2table_Logo.png';
import vgg16 from '../assets/proj_images/vgg16.png';


function Projects() {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const projects = [
    {
      title: "Doc2Table",
      link: "https://www.doc2table.com/",
      images: [doc2tableLogo],
      description: "A Human-AI interactive tool that converts unstructured data (PDFs, Word documents) into structured formats like CSV or Excel.",
      whatIDid: "I founded and led its development, creating the core algorithm, defining the methodology, designing the UX, and contributing to the overall software system design."
    },
    {
      title: "Cafe App",
      link: "",
      images: [],
      description: "A customizable React Native café app with separate admin and customer interfaces, pricing/category/add-on management, multi-location support, and Stripe payments. Reach out to me if you would like to use in your cafè!",
      whatIDid: "Developed the CI/CD pipeline, implemented the recommendation algorithm, coded frontend components, and created unit and integration tests."
    },
    {
      title: "Meshaa",
      link: "https://meshaa.xyz/",
      images: [],
      description: "Meshaa is a startup at the intersection of computer graphics and machine learning. We have built a prototype app that digitizes real-world assets into 3D objects, enabling users to share clothing and other collectibles. Using AI-based photogrammetry, we process video sequences and train volumetric representation of gaussians at every point in the scene to capture accurate 3D shapes. The app, developed in Swift with RealityKit for future Vision Pro scaling, is currently being optimized for performance and user experience. A 3D representation of real-world objects enhances AR/VR interactions and supports more perceptive AI models. If you would like to check out the demo, feel free to contact me.",
      whatIDid: "Led the research and methodology, designed the software system and database architecture, implemented backend code for data storage and 3D data transfer endpoints, performed frontend code reviews, and developed the Next.js website."
    },
    {
      title: "Endoscopic Surgery Tool Detection for Robot-Assisted Surgery",
      link: "",
      images: [],
      description: "Endoscopic surgery can be partially automated, and precise surgical tool segmentation is critical for machine perception and augmented-reality feedback.",
      whatIDid: "Implemented a U-Net architecture in PyTorch for pixel-wise segmentation of surgical tools in endoscopic images, achieving 99% accuracy on clean test data and 85% on corrupted images (smoke, bleeding, low brightness), just 3% below the benchmark record. Built a robust data-augmentation pipeline with color jittering and Gaussian blurring to expand the training set fourfold. Trained the U-Net from scratch, defined a custom Dice-score loss function, and performed extensive data augmentation to increase sample size."
    },
    {
      title: "Fine-Tuned VGG16",
      link: "",
      images: [vgg16],
      description: "Fine-tuning a neural network adapts a pre-trained model to a specialized task, leveraging prior training to reduce computational cost and data requirements.",
      whatIDid: "Fine-tuned a VGG16 model pre-trained on ImageNet to classify the FashionMNIST dataset, modifying the architecture to accept grayscale input. Improved test accuracy from 50% to 89% by strategically freezing layers and optimizing the final linear layers."
    }
  ];

  const nextImage = (projectIndex) => {
    const project = projects[projectIndex];
    if (!project.images || project.images.length === 0) return;

    const currentIndex = currentImageIndex[projectIndex] || 0;
    const nextIndex = (currentIndex + 1) % project.images.length;
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: nextIndex
    }));
  };

  const prevImage = (projectIndex) => {
    const project = projects[projectIndex];
    if (!project.images || project.images.length === 0) return;

    const currentIndex = currentImageIndex[projectIndex] || 0;
    const prevIndex = currentIndex === 0 ? project.images.length - 1 : currentIndex - 1;
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: prevIndex
    }));
  };

  return (
    <div className="content-container">
      <h1 className="main-heading">Projects</h1>

      <div className="projects-introduction">
        <p className="bio-text">
         Here are a few projects I’ve worked on, each highlighting different technical skills and lessons learned.
          <br /><br />
          I enjoy engineering and design. Particularly machine-learning projects,
          where you are forced to understand the ontology of that which you’re trying to predict.
         
        </p>

      </div>

      <div className="projects-list">
        {projects.map((project, projectIndex) => {
          const hasImages = project.images && project.images.length > 0;
          const currentIndex = currentImageIndex[projectIndex] || 0;
          const currentImage = hasImages ? project.images[currentIndex] : null;

          return (
            <div
              key={projectIndex}
              className="project-item"
              style={{
                maxWidth: "900px",
                width: "100%",
                margin: "0 auto 2.5rem auto"
              }}
            >
              {/* Title and Link Row */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px"
              }}>
                <h3 className="project-title" style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  margin: "0"
                }}>
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    style={{
                      color: "inherit",
                      textDecoration: "underline",
                      fontSize: "1rem"
                    }}
                  >
                    {project.link}
                  </a>
                )}
              </div>

              {/* Description Section */}
              <div className="project-section" style={{ marginBottom: "24px" }}>
                <h4 style={{
                  marginBottom: "8px",
                  fontSize: "1.1rem",
                  fontWeight: "600"
                }}>
                  Description
                </h4>
                <p className="project-description">{project.description}</p>
              </div>

              {/* Images Section */}
              {hasImages && (
                <div style={{ marginBottom: "24px", display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      width: "100%",
                      maxWidth: "500px"
                    }}
                  >
                    <img
                      src={currentImage}
                      alt={`${project.title} - ${currentIndex + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        display: "block"
                      }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/500x300?text=No+Image";
                      }}
                    />

                    {project.images.length > 1 && (
                      <>
                        {/* Left Arrow - appears on hover over left half */}
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            console.log('Left arrow clicked for project', projectIndex);
                            prevImage(projectIndex);
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "0";
                          }}
                          style={{
                            position: "absolute",
                            left: "0",
                            top: "0",
                            width: "50%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            paddingLeft: "20px",
                            cursor: "pointer",
                            opacity: "0",
                            transition: "opacity 0.3s ease",
                            borderRadius: "8px 0 0 8px",
                            zIndex: "10"
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.7)",
                              color: "white",
                              borderRadius: "50%",
                              width: "40px",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "20px",
                              fontWeight: "bold",
                              pointerEvents: "none"
                            }}
                          >
                            ←
                          </div>
                        </div>

                        {/* Right Arrow - appears on hover over right half */}
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            console.log('Right arrow clicked for project', projectIndex);
                            nextImage(projectIndex);
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "0";
                          }}
                          style={{
                            position: "absolute",
                            right: "0",
                            top: "0",
                            width: "50%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            paddingRight: "20px",
                            cursor: "pointer",
                            opacity: "0",
                            transition: "opacity 0.3s ease",
                            borderRadius: "0 8px 8px 0",
                            zIndex: "10"
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.7)",
                              color: "white",
                              borderRadius: "50%",
                              width: "40px",
                              height: "40px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "20px",
                              fontWeight: "bold",
                              pointerEvents: "none"
                            }}
                          >
                            →
                          </div>
                        </div>

                        {/* Image counter */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                            color: "white",
                            padding: "4px 8px",
                            borderRadius: "12px",
                            fontSize: "12px",
                            pointerEvents: "none"
                          }}
                        >
                          {currentIndex + 1} / {project.images.length}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* What I Did Section */}
              <div className="project-section">
                <h4 style={{
                  marginBottom: "8px",
                  fontSize: "1.1rem",
                  fontWeight: "600"
                }}>
                  What I did
                </h4>
                <p className="project-what-i-did">{project.whatIDid}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;