import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../components/seo"

import About from '../modules/About'
import Services from '../modules/Services'
import Portfolio from '../modules/Portfolio'
import CallToAction from '../modules/CallToAction'
import Contact from '../modules/Contact'

import Scroller from "../components/scroller"

export default class IndexPage extends React.Component {
	constructor(props) {
		super(props)
		Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
		this.state = {
			modalShow: false,
			modalCurrent: 0
		}
		this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
		this.setModal = this.setModal.bind(this);
	}

	handlePortfolioClick(index, e) {
		e.preventDefault();
		this.setModal(true, index);
	}

	setModal(isShown, current) {
		this.setState({
			modalShow: isShown,
			modalCurrent: current
		});
	}

	render() {
		return (
			<Layout>
				<SEO title="Home" />
				<About />
				<Services />
				<Portfolio
					handlePortfolioClick={this.handlePortfolioClick}
					imgData={this.props.data.images.edges}
					modalShow={this.state.modalShow}
					modalCurrent={this.state.modalCurrent}
					setModal={() => this.setModal(false, 0)}
				/>
				<CallToAction />
				<Contact />
			</Layout>
		)
	}
}


export const imageData = graphql`
  query {
    images: allFile(filter: {relativePath: {glob: "portfolio/fullsize/*.jpg"}}, sort: {fields: name}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
