import React from "react";
import {Layout, Page} from '@shopify/polaris';

const Settings = (props) => {
    return (
        <Page
            title="Settings"
            separator
        >
            <Layout>
                <Layout.AnnotatedSection title="Store details">
                    <p>Annotated section content</p>
                </Layout.AnnotatedSection>
            </Layout>
        </Page>
    )
};

export default Settings;