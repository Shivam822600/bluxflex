import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_roofing_underlayment_png_1 from '../assets/images/roofing_underlayment.png?url';
import asset_roofing_underlayment_300x300_png_2 from '../assets/images/roofing_underlayment-300x300.png?url';

export default function ProductRoofingUnderlayment() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2223 product type-product status-publish has-post-thumbnail hentry product_category-agro-textiles">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_roofing_underlayment_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_roofing_underlayment_png_1} 1024w, ${asset_roofing_underlayment_300x300_png_2} 300w, ${asset_roofing_underlayment_png_1} 150w, ${asset_roofing_underlayment_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Roofing Underlayment</h1>                </div>
    	                <div class="page-content">
        <p><strong>The Layer Between Structure and Weather</strong></p>
<p>A roof covering — tiles, slates, metal sheets, or shingles — is the primary weather barrier. The roofing underlayment is the secondary one. It sits between the structural deck and the covering, providing a back-up water barrier, a vapour management layer, and protection for the structural deck during installation and in the event that the primary covering is compromised.</p>
<p>The underlayment manages what the primary covering cannot: water and vapour that penetrates through laps, at ridges, at penetrations, and in sustained wind-driven rain events. In cold climates, it manages condensation forming at the underside of the roof covering. Specifying the correct underlayment determines the moisture performance of the building envelope for the life of the roof.</p>
<p><strong>➤ Woven PP Breathable Roofing Underlayment</strong></p>
<p>Woven polypropylene roofing underlayments are multilayer constructions with a vapourpermeable film layer that allows moisture vapour to escape outward through the fabric while blocking liquid water ingress from above. Laid directly on rafters or structural deck, beneath tiles, slates, or metal roofing.</p>
<p>The vapour permeability — expressed as Sd value — determines how freely moisture escapes outward from the building structure. Low Sd values are required in cold-climate construction where preventing condensation within the roof assembly is critical to longterm structural integrity.</p>
<p><strong>Construction:</strong> Woven PP multilayer with vapour-permeable membrane&nbsp; <strong>Performance:</strong> Vapour-permeable · Liquid water-resistant&nbsp; <strong>Temporary UV Exposure:</strong> 3–6 months before covering&nbsp; <strong>Roll Width:</strong> 1.5 m · 2.4 m · 3.0 m standard — custom available&nbsp; <strong>Roll Length:</strong> 30 m · 50 m · 100 m — custom on request Custom Sizes: Yes Best For: Residential and commercial roofing under tiles, slates, and metal in cold and temperate climates</p>
<p><strong>➤ Heavy-Duty Roofing Underlayment</strong></p>
<p>Reinforced woven PP construction for commercial, industrial, and low-pitch roofing where longer temporary exposure and higher mechanical load during installation are expected.</p>
<p><strong>Temporary Exposure:</strong> Up to 12 months in some specifications&nbsp; <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Commercial and industrial roofing, low-pitch and flat roofing, extended construction programmes</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}