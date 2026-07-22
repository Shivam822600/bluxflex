import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_burlap_fabric_png_1 from '../assets/images/burlap_fabric.png?url';

export default function ProductBurlapFabricHessianFabric() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2183 product type-product status-publish has-post-thumbnail hentry product_category-jute-burlap">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_burlap_fabric_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_burlap_fabric_png_1} 945w, ${asset_burlap_fabric_png_1} 297w, ${asset_burlap_fabric_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Burlap Fabric</h1>                </div>
    	                <div class="page-content">
        <p>Burlap — known as hessian in Europe and the UK — is the base plain-woven jute fabric from which most jute products are made. It is woven from spun jute yarns on plain looms in an open, breathable construction that is simultaneously strong enough for heavy industrial packaging and natural enough for premium retail and horticulture applications.</p>
<p>Burlap fabric is supplied in rolls in a range of weights, widths, and weave densities to suit the full spectrum of end uses — from lightweight decorative and craft fabric to heavy-duty sacking and industrial lining material. The natural tan colour of undyed burlap has become a recognised visual signal of natural, sustainable, and artisan product positioning at retail — a commercial asset that synthetic alternatives cannot replicate.</p>
<p><strong>Fabric Weight:</strong> 150 GSM – 400 GSM</p>
<p><strong>Roll Width:</strong> Custom — standard widths and cut-toorder available</p>
<p><strong>Colour: </strong>Natural tan — undyed</p>
<p><strong>Weave:</strong> Plain woven jute yarn</p>
<p><strong>Custom Sizes: </strong>Yes — roll width and length to specification</p>
<p><strong>Best For:</strong> Sack making, gardening and landscaping, retail packaging, decorative and craft applications, agricultural soil covering, horticultural liner fabric</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}