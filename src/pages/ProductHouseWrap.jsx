import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_house_wrap_png_1 from '../assets/images/house_wrap.png?url';
import asset_house_wrap_300x300_png_2 from '../assets/images/house_wrap-300x300.png?url';

export default function ProductHouseWrap() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2221 product type-product status-publish has-post-thumbnail hentry product_category-agro-textiles">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_house_wrap_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_house_wrap_png_1} 1024w, ${asset_house_wrap_300x300_png_2} 300w, ${asset_house_wrap_png_1} 150w, ${asset_house_wrap_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">House Wrap</h1>                </div>
    	                <div class="page-content">
        <p><strong>One Fabric. Two Jobs.</strong></p>
<p>A house wrap — also called a building wrap or weather-resistive barrier — is installed on the exterior wall framing beneath the cladding or facade. It manages two simultaneous and opposing moisture challenges in a wall assembly: preventing liquid water from wind-driven rain penetrating inward, while allowing moisture vapour generated inside the building to escape outward.</p>
<p>A wall that blocks all moisture traps the vapour buildings produce continuously and causes condensation, mould, and structural decay within the wall cavity. A wall that allows free moisture transmission admits wind-driven rain and destroys insulation and framing. The house wrap solves both simultaneously — a one-way moisture valve at the building scale.</p>
<p><strong>➤ Woven PP House Wrap</strong></p>
<p>Woven polypropylene house wraps offer higher tear resistance and puncture resistance than spunbond alternatives — critical on construction sites where wall wraps are exposed to mechanical damage from fixings, tools, and rough handling during cladding installation. Woven wraps are specified on commercial and industrial buildings and on residential projects where the construction programme involves extended exposure before cladding is applied.</p>
<p>Printed with measurement alignment markings and branding for contractor and project identification. Confirmed to market-specific vapour permeability and liquid water resistance ratings.</p>
<p><strong>Construction:</strong> Woven PP with laminated film layer&nbsp; <strong>Vapour Permeability:</strong> To market code requirement&nbsp; <strong>Liquid Water Resistance:</strong> Class A standard&nbsp; <strong>Printed Markings:</strong> Measurement lines · Brand · Installation instructions&nbsp; <strong>Temporary UV Exposure:</strong> 90–180 days depending on grade&nbsp; <strong>Roll Width:</strong> 1.5 m · 2.4 m · 3.0 m standard — custom available&nbsp; <strong>Roll Length:</strong> 30 m · 50 m · 100 m — custom on request&nbsp; <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Residential and commercial framed construction under all cladding types — timber frame, light steel frame, masonry veneer</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}