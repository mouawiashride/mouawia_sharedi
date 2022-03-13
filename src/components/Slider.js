import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import pizzaApp from '../images/pizzaApp.png'
import dashBoard from '../images/dashBoard.png'
import shop4 from '../images/shop4.png'

const projects= [
	{url:'https://mouawiashride.github.io/pizza_app/',skillOfProj:'React with FramerMotion',alt:'React_with_framerMotion',projName:'PizzaApp',projCover:pizzaApp},
	{url:'https://mouawiashride.github.io/shop4/',skillOfProj:'React , material ui ,commerce.js ,stripe ',alt:'React_material_ui_commerce.js_stripe',projName:'shop4',projCover:shop4},
	{url:'https://mouawiashride.github.io/shop4_flux/',skillOfProj:'React ,flux , material ui ,commerce.js ,stripe ',alt:'React_material_ui_commerce.js_stripe',projName:'shop4',projCover:shop4},
	{url:'https://mouawiashride.github.io/',skillOfProj:'React , material ui , recharts  ',alt:'React_material_ui',projName:'dashBoard',projCover:dashBoard},

]
export default function Slider() {

	const slider = projects.map((proj,index)=>{
		return (
		<div key={index} className='h-[100%]'>
            <a className='hover:cursor-pointer block' target={'_blank'} href={''+proj.url} rel="noreferrer" >
				  <img   alt={proj.alt} src={ proj.projCover} className='h-[inherit]'/>			
				  </a>
			 <p className="  select-none legend">
     {proj.skillOfProj}
			 </p>
		</div>
		)
	})
  return (
<>
    
  
  
          <Carousel className=' justify-center items-center  rounded-[20px] overflow-hidden mt-8  mx-auto w-auto  max-w-[1200px]  ' showArrows={false}  showStatus={false}  showThumbs={false} interval={2000} autoPlay={true} infiniteLoop={true}>

                {slider}
            </Carousel>


 
  

    </>

  )
}
