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
        <p><strong>The Open Weave That Does Not Open to Compromise</strong></p>
<p>Most fabrics achieve strength by closing up tighter weave, more threads, less space. Leno fabric does the opposite, and that is precisely what makes it exceptional. Through a unique weaving method where warp yarns twist around each other in a figure-eight pattern to lock the weft yarns firmly in place, leno fabric creates a structure that is simultaneously open and stable. It does not fray, it does not shift, and it does not lose its shape even under continuous load.</p>
<p>This is a fabric built for applications where ordinary materials would fail. Industries that need strength without weight, ventilation without fragility, or structure without opacity turn to leno fabric as their answer. In the agricultural world it becomes crop netting, produce packaging, and shade cloth. In construction and civil engineering it serves as reinforcement mesh for roofing underlays, drainage products, and composite structural applications. In the automotive and furniture industries it is used as backing material for moulded foam parts, seat components, and upholstery reinforcement. Even in technical textiles and paper manufacturing, leno fabric appears as a reinforcement layer that holds products together under pressure.</p>
<p>Made from polypropylene, polyester, glass fibre, or cotton depending on the intended application, our leno fabric is manufactured to precise mesh specifications and is available in a wide range of widths, weights, and yarn compositions. UV-resistant, mildew-resistant, and tear-resistant, it performs reliably in both indoor controlled environments and the harshest outdoor conditions. For manufacturers sourcing a technical base fabric that can be laminated, coated, cut, or converted — leno fabric is a remarkably versatile starting point that underpins far more finished products than most people realise.</p>
<p><strong>Ideal For:</strong> Agricultural netting and crop protection, construction reinforcement, roofing underlay backing, automotive moulded components, furniture and upholstery support, composite material manufacturing, filtration applications, and technical textile production.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}