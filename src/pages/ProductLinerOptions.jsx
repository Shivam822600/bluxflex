import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_jpg_1 from '../assets/images/fd6ea04a-aca5-4e3d-b574-738ee945af82-md.jpg?url';
import asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_jpeg_2 from '../assets/images/fd6ea04a-aca5-4e3d-b574-738ee945af82-md.jpeg?url';

export default function ProductLinerOptions() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2294 product type-product status-publish has-post-thumbnail hentry product_category-pp-woven-sacks">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_jpeg_2} 800w, ${asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_jpeg_2} 300w, ${asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_jpeg_2} 150w, ${asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_jpeg_2} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Liner Options</h1>                </div>
    	                <div class="page-content">
        <p>A liner turns a woven PP bag into a moisture barrier, a contamination barrier, and in some applications a compliance document. The woven fabric handles structural load. The liner handles product protection. Specifying no liner for a product that needs one or the wrong liner attachment method for your filling station — creates failures that show up at the destination, not at the factory.</p>
<p><strong>➤&nbsp;No Liner</strong></p>
<p>For products with no moisture sensitivity, no food contact requirement, and no fine-particle migration risk through the woven fabric. Sand, gravel, coarse aggregates, non-food minerals, and construction materials need no liner.</p>
<p><strong>Best For:</strong> Sand, aggregates, construction materials, coarse non-food products</p>
<p>➤&nbsp;<strong>Loosely Inserted PE Liner</strong></p>
<p>A polyethylene inner bag placed loosely inside the woven PP sack before filling the most widely used liner configuration globally. The liner provides a complete moisture and contamination barrier without being attached to the outer bag. After filling the liner is tied off, heat-sealed, or twisted and tucked.</p>
<p>Because the liner is independent of the outer bag, the PE grade, thickness, and colour can be specified separately. Available in 50 to 150 micron depending on the product’s moisture sensitivity and handling requirements. The liner can be removed independently useful where the liner is despatched forward with the product and the outer bag is retained or returned.</p>
<p><strong>Liner Thickness:</strong> 50 – 150 micron Attachment: None — loosely placed Best For: Granular food products, hygroscopic materials, fine powders requiring moisture barrier inside a standard woven sack</p>
<p>➤&nbsp;<strong>Liner Stitched at Top</strong></p>
<p>A PE liner cut to the bag’s internal dimensions and stitched into the bag at the top seam. The liner is anchored at the top, hangs correctly positioned before filling begins, and cannot shift or bunch during filling. Standard for food-grade and pharmaceutical small bag applications where liner positioning must be consistent at an automated or semi-automated filling station.</p>
<p><strong>Attachment:</strong> Stitched into top seam&nbsp; <strong>Best For:</strong> Food-grade sacks, pharmaceutical products, fine powders requiring consistent liner positioning at the filling station</p>
<p>➤&nbsp;<strong>Liner Stitched at Top and Bottom</strong></p>
<p>The liner is stitched into the bag at both the top seam and the bottom seam fully anchored at both ends. The liner conforms precisely to the bag geometry and cannot migrate at any point through filling, handling, storage, or discharge. The most secure liner integration available for a woven PP sack.</p>
<p><strong>Attachment:</strong> Stitched into both top and bottom seams&nbsp; <strong>Best For:</strong> Fine powders, food-grade, pharmaceutical applications requiring maximum liner stability and full product containment throughout the supply chain</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}