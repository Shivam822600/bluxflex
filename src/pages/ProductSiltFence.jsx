import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_Silt_Fence_jpg_1 from '../assets/images/Silt-Fence.jpg?url';

export default function ProductSiltFence() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1712 product type-product status-publish has-post-thumbnail hentry product_category-specialty-febrics">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_Silt_Fence_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_Silt_Fence_jpg_1} 945w, ${asset_Silt_Fence_jpg_1} 297w, ${asset_Silt_Fence_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Silt Fence</h1>                </div>
    	                <div class="page-content">
        <p><strong>Control Sediment. Protect the Environment.</strong></p>
<p>Our Silt Fence is a heavy-duty, permeable geotextile barrier engineered to prevent sediment runoff from construction sites, roadworks, and land development projects. Made from durable woven polypropylene fabric, it acts as a temporary but highly effective filtration barrier allowing water to pass through freely while trapping suspended soil particles, sediment, and debris before they reach waterways, storm drains, or neighboring properties.</p>
<p>Silt fences are one of the most widely used and cost-effective erosion control solutions across the construction and civil engineering industry. They are essential for maintaining environmental compliance with regulations such as EPA SWPPP guidelines and other local environmental protection standards. Easy to install, lightweight to handle, and effective across a wide range of site conditions, our Silt Fence delivers dependable performance throughout the lifecycle of any construction project.</p>
<p>Available in standard, contractor, and heavy-duty grades, with options for pre-installed stakes for fast deployment. Custom lengths and heights are available for bulk export orders to government contractors, civil engineering firms, and construction companies worldwide.</p>
<p><strong>Ideal For:</strong> Construction site perimeter control, road and highway construction, residential and commercial land grading, slope stabilization, agricultural field edges, river and canal bank protection, and infrastructure development projects.</p>
<p><strong>Key Features:</strong></p>
<p>Durable woven polypropylene geotextile construction Allows water filtration while capturing sediment and soil particles Tear-resistant and corrosion-resistant withstands harsh site conditions Lightweight and easy to install with wooden or metal stakes Effective protection for nearby waterways, drains, and ecosystems Available in standard, contractor, and heavy-duty grades Custom lengths, heights, and pre-staked options for bulk orders Meets ASTM and EPA environmental compliance standards</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}