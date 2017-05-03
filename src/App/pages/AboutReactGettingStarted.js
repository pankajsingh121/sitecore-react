import React from "react";
import TwoColumn48 from "./../components/Sublayouts/TwoColumn48";
import PageHeaderCarousel from "./../components/Media/PageHeaderCarousel";
import PageImageHeader from "./../components/PageContent/PageImageHeader";
import PageTitle from "./../components/PageContent/PageTitle";
import PageBody from "./../components/PageContent/PageBody";
import SecondaryMenu from "./../components/Navigation/SecondaryMenu";
import { Data } from "./../data/Data";

export default class AboutReactGettingStarted extends React.Component {
    render() {
    
        var content = Data.getGettingStartedPageData();

        return(
            <div>
                <PageImageHeader data={content}>
                    <section class="container">
                        <h1>todo: add breadcrumb</h1>
                        <p>Lead text</p>
                    </section>
                </PageImageHeader>
                <TwoColumn48>
                    <div placeholderKey="col-narrow-1">
                        <SecondaryMenu data={Data.getAboutSecondaryMenu()} />
                    </div>
                    <div placeholderKey="col-wide-1">
                        <PageTitle data={content} />
                        <PageBody data={content} />
                    </div>
                </TwoColumn48>
            </div>
        );
    }
}