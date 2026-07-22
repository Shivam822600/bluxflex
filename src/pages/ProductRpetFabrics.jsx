import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_rPET_Fabrics_jpg_1 from '../assets/images/rPET-Fabrics.jpg?url';
import asset_rPET_Fabrics_297x300_jpg_2 from '../assets/images/rPET-Fabrics-297x300.jpg?url';

export default function ProductRpetFabrics() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1716 product type-product status-publish has-post-thumbnail hentry product_category-specialty-febrics">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_rPET_Fabrics_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_rPET_Fabrics_jpg_1} 945w, ${asset_rPET_Fabrics_297x300_jpg_2} 297w, ${asset_rPET_Fabrics_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">rPET Fabrics</h1>                </div>
    	                <div class="page-content">
        <p><strong>Recycled from Plastic. Reimagined for Industry.</strong></p>
<p>Our rPET Fabrics are high-quality textiles made from recycled polyethylene terephthalate primarily sourced from post-consumer plastic bottles and industrial plastic waste. By transforming discarded plastics into premium-grade fabric, rPET offers the same strength, durability, and performance as virgin polyester while dramatically reducing environmental impact.</p>
<p>The production of rPET fabric uses significantly less energy and water compared to conventional polyester, and helps divert millions of plastic bottles from landfills and oceans every year. It is the material of choice for brands, manufacturers, and governments committed to sustainability, circular economy, and plastic reduction goals.</p>
<p>Our rPET Fabrics are available in woven and knitted formats, can be laminated, coated, printed, or blended with other fibers, and meet leading international sustainability standards. From fashion and sportswear to industrial textiles and geotextiles, rPET delivers performance without compromise.</p>
<p><strong>Ideal For:</strong> Eco-friendly bags and packaging, sportswear and activewear, outdoor gear, home textiles, upholstery, automotive interiors, industrial non-wovens, and sustainable retail branding.</p>
<p><strong>Key Features:</strong></p>
<p>Made from 100% post-consumer recycled plastic bottles and wasteMatches virgin polyester in strength, durability, and performance Uses up to 62% less energy and 99% less water in production Reduces CO2 emissions by up to 32% vs. conventional polyester Water-resistant, wrinkle-resistant, quick-drying, and colorfast Available in woven, knitted, laminated, and coated formats Certifiable under GRS (Global Recycled Standard) and OEKO-TEX Ideal for brands targeting sustainability and eco-compliance markets</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}