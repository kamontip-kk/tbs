import React from "react";

const PartnerSection = ({t}:any) =>{
    return(
        <div className="partner_section">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h6>Many Leading Businesses Trust ThaiBulkSMS</h6>
                    </div>
                    <div className="col">
                        <>
                        <div className="item">
                            <div className="partner_item">
                                img PartnerLogo1
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                img PartnerLogo2
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                img PartnerLogo3
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                img PartnerLogo4
                            </div>
                        </div>
                        <div className="item">
                            <div className="partner_item">
                                img PartnerLogo5
                            </div>
                        </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerSection;