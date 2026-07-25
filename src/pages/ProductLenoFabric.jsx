import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_leno_fabric_jpg_1 from '../assets/images/leno-fabric.jpg?url';
import asset_leno_fabric_jpeg_2 from '../assets/images/leno-fabric.jpeg?url';

export default function ProductLenoFabric() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1708 product type-product status-publish has-post-thumbnail hentry product_category-leno-bags-febric">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_leno_fabric_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_leno_fabric_jpeg_2} 945w, ${asset_leno_fabric_jpeg_2} 297w, ${asset_leno_fabric_jpeg_2} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Leno Fabric</h1>                </div>
    	                <div class="page-content">
        <p><strong>Leno Weave Fabric</strong></p>
<p>Leno fabric is woven using a technique where warp yarns twist around each other to lock the weft yarns in place, creating a structure that is open (mesh-like) but stable — it resists fraying and shifting under load, unlike a standard tighter weave.</p>
<p>It is used across several industries: as crop netting, produce packaging, and shade cloth in agriculture; as reinforcement mesh for roofing underlays, drainage products, and composite structures in construction; as backing material for moulded foam parts, seat components, and upholstery in automotive and furniture manufacturing; and as a reinforcement layer in technical textiles and paper manufacturing.</p>
<p>Available in polypropylene, polyester, glass fibre, or cotton depending on the application, manufactured to specified mesh dimensions, widths, weights, and yarn compositions. UV-resistant and tear-resistant. Suitable as a base fabric for lamination, coating, cutting, or further conversion.</p>
<p><strong>Ideal For:</strong> Agricultural netting and crop protection, construction reinforcement, roofing underlay backing, automotive moulded components, furniture and upholstery support, composite material manufacturing, filtration applications, and technical textile production.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}