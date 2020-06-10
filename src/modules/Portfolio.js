import React from 'react';
import Img from "gatsby-image"
import Carousel from "@components/PortfolioCarousel"
import Modal from "@components/PortfolioCarousel/Modal"

const Portfolio = ({
	handlePortfolioClick,
	imgData,
	modalShow,
	modalCurrent,
	setModal
}) => (
		<>
			<section id="portfolio">
				<div className="container-fluid p-0">
					<div className="row no-gutters">
						{imgData.map((img, idx) => (
							<div className="col-lg-4 col-sm-6">
								<a className="portfolio-box"
									href="img/portfolio/fullsize/1.jpg"
									onClick={handlePortfolioClick.bind(this, idx)}
								>
									<Img fluid={imgData[idx].node.childImageSharp.fluid} />
									<div className="portfolio-box-caption">
										<div className="project-category text-white-50">
											Category
										</div>
										<div className="project-name">
											Project Name {idx}
										</div>
									</div>
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			<Modal
				show={modalShow}
				onHide={setModal}
			>
				<Carousel
					images={imgData}
					current={modalCurrent}
				/>
			</Modal>
		</>
	);

export default Portfolio;