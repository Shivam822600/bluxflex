import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_jute_fabric_png_1 from '../assets/images/jute-fabric.png?url';

export default function ProductJuteFabric() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1557 product type-product status-publish has-post-thumbnail hentry product_category-jute-burlap">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_jute_fabric_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_jute_fabric_png_1} 945w, ${asset_jute_fabric_png_1} 297w, ${asset_jute_fabric_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Jute Fabric</h1>                </div>
    	                <div class="page-content">
        <p><strong>The Golden Fiber. Endless Possibilities.</strong></p>
<p>Our Jute Fabric — often called the “Golden Fiber” — is a versatile, eco-friendly natural textile. Woven from the long, strong fibers of the jute plant, this fabric combines durability with a natural golden-brown texture, and is used across packaging, fashion, home décor, agriculture, and industrial sectors.</p>
<p>Jute is commonly cited as one of the most widely produced natural fibers globally after cotton, with growing demand as businesses shift away from plastic and synthetic materials. It is strong, breathable, abrasion-resistant, and naturally biodegradable, suited for both heavy-duty industrial use and retail applications.</p>
<p>It can be woven in various weights and finishes, dyed in multiple colors, laminated for water resistance, or blended with cotton for a softer feel. Whether used as raw fabric for manufacturing or as finished textile for retail, our Jute Fabric meets international quality standards and is available in bulk quantities for global export.</p>
<p><strong>Ideal For:</strong> Bag manufacturing, carpet backing, upholstery, home furnishings, wall coverings, canvas, fashion accessories, packaging liners, and agricultural wrapping.</p>
<p><strong>Key Features:</strong></p>
<p>100% natural, biodegradable, and renewable Strong, durable, and abrasion-resistant Breathable and naturally moisture-absorbing Available in various weights, weaves, and widths Can be dyed, laminated, or blended with cotton A renewable crop grown as part of the natural carbon cycle. Suitable for fashion, industrial, and agricultural applications Compliant with international eco and sustainability standards</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}