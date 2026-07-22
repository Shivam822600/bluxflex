import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_Trellis_Netting_png_1 from '../assets/images/Trellis-Netting.png?url';

export default function ProductTrellisNetting() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1525 product type-product status-publish has-post-thumbnail hentry product_category-jute-burlap">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_Trellis_Netting_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_Trellis_Netting_png_1} 945w, ${asset_Trellis_Netting_png_1} 297w, ${asset_Trellis_Netting_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Trellis Netting</h1>                </div>
    	                <div class="page-content">
        <p><strong>Grow Greener. Grow Smarter.</strong></p>
<p>Our Jute Trellis Netting is a sustainable and plastic-free solution for farmers and gardeners who need strong, reliable plant support without leaving waste behind. Made from 100% biodegradable jute fiber, this netting provides sturdy vertical and horizontal support for a wide range of climbing plants and crops throughout the growing season.</p>
<p>The open mesh design improves air circulation and sunlight exposure, promoting healthier plant growth, better yields, and reduced risk of disease. At the end of the season, the netting can be composted directly along with plant matter — no plastic sorting, no landfill, no environmental impact.</p>
<p>Strong enough to support heavy crops like tomatoes, cucumbers, and melons, yet gentle enough not to damage delicate stems and vines. Available in bulk rolls for both small-scale gardens and large commercial farming operations.</p>
<p><strong>Ideal For:</strong> Vegetable farms, organic gardens, flower cultivation, greenhouse operations, pea and bean crops, eco-farming projects.</p>
<p><strong>Key Features:</strong></p>
<p>100% biodegradable and compostable Soft, plant-safe texture — no stem damage Improves airflow and sunlight penetration Suitable for vertical and horizontal use Available in multiple roll sizes for bulk supply Perfect plastic-free replacement for synthetic netting</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}