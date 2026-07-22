import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_soil_saver_png_1 from '../assets/images/soil-saver.png?url';

export default function ProductSoilSaver() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1559 product type-product status-publish has-post-thumbnail hentry product_category-jute-burlap">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_soil_saver_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_soil_saver_png_1} 945w, ${asset_soil_saver_png_1} 297w, ${asset_soil_saver_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Soil Saver (Jute Geotextile)</h1>                </div>
    	                <div class="page-content">
        <p><strong>Protect the Earth. Naturally.</strong></p>
<p>Our Jute Soil Saver also known as Jute Geotextile or Jute Mesh is a 100% natural, open-weave jute fabric engineered to protect soil from erosion, stabilize slopes, and support vegetation growth. Designed for use in civil engineering, landscaping, and environmental projects, it offers an effective and eco-friendly alternative to synthetic geotextiles.</p>
<p>The open-weave design of the Soil Saver allows water to infiltrate naturally while holding seeds and soil firmly in place creating the ideal microclimate for vegetation to take root and establish. As plants grow and stabilize the land, the jute mesh gradually biodegrades into the soil, adding natural nutrients and leaving zero waste behind.</p>
<p>Trusted by engineers, environmental contractors, and government agencies globally, Jute Soil Saver is widely used for large-scale erosion control, road construction, riverbank protection, and slope stabilization projects. It is cost-effective, easy to install, and conforms perfectly to any ground surface or contour.</p>
<p><strong>Ideal For:</strong> Slope stabilization, riverbank and canal protection, road construction, railway embankments, landscaping projects, sand dune stabilization, vegetation establishment on bare soil.</p>
<p><strong>Key Features:</strong></p>
<p>100% biodegradable decomposes naturally after vegetation establishesOpen-weave design allows water infiltration and seed germinationAdapts seamlessly to any ground surface or contour Retains soil moisture to accelerate plant growth Effective against rain splash, surface runoff, and wind erosion Eco-friendly alternative to synthetic and plastic geotextiles Suitable for large-scale civil and environmental engineering projects Available in various mesh weights and roll sizes for bulk export</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}