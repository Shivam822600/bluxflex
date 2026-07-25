import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_shade_nets_jpg_1 from '../assets/images/shade_nets.jpg?url';

export default function ProductShadesNet() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1652 product type-product status-publish has-post-thumbnail hentry product_category-agro-textiles">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_shade_nets_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_shade_nets_jpg_1} 945w, ${asset_shade_nets_jpg_1} 297w, ${asset_shade_nets_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Shade Nets</h1>                </div>
    	                <div class="page-content">
        <p><strong>Shade Net</strong></p>
<p>Every crop has a light saturation point — the sunlight intensity above which additional light no longer increases photosynthesis and can cause heat stress and yield reduction. A shade net installed above the crop canopy reduces incoming solar radiation to a level the crop can productively use, without blocking airflow. Shade percentage (30% to 90%) determines how much incoming light is excluded — matching the percentage to the specific crop and regional radiation intensity is the key specification decision.</p>
<p><strong>➤ Knitted HDPE Shade Net</strong></p>
<p>Knitted high-density polyethylene shade net is a common standard for crop shading. The knitted construction creates a dimensionally stable, lightweight net that resists tearing from a cut edge — unlike woven fabric, where a cut can propagate. This makes it suitable for installations cut to size or shaped around structures.</p>
<p><strong>Construction:</strong> Knitted HDPE — monofilament or tape yarn&nbsp; <strong>Shade Percentage:</strong> 30% · 40% · 50% · 60% · 70% · 80% · 90%&nbsp; <strong>Colours:</strong> Black · Green · White&nbsp; <strong>UV Rating:</strong> 5-year · 8-year · 10-year <strong>Width:</strong> Up to 12 m — custom&nbsp; <strong>Length:</strong> Custom rolls or cut panels&nbsp; <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Vegetables, flowers, nursery shade houses, fruit crops, livestock shade, car parks, sports facilities, outdoor hospitality</p>
<p><strong>➤ Woven Shade Net</strong></p>
<p>Woven shade nets in PP or HDPE tape offer a more rigid, dimensionally stable structure under sustained tension — suited to permanent shade structures and windbreak panels where shape retention under long-term mechanical load is the priority.</p>
<p><strong>Construction:</strong> Woven PP or HDPE tape&nbsp; <strong>Shade Percentage:</strong> 30% – 90%&nbsp; <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Permanent shade structure cladding, windbreak panels, animal husbandry shade, rigid structural installations</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}