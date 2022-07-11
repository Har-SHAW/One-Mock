import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import BodyRoot from "../../atoms/body/root";

const HomePageTemplate = (props) => {
    return (
        <BodyRoot>
            <div className="gradient">
                {props.navigation}
                <div className="one-mock">One Mock</div>
            </div>
            <div className="flex justify-between w-screen space-x-44">
                <div className="flex flex-col py-5 px-12 text-gray-600 w-full">
                    <div className="font-bold text-3xl mb-1">Usage</div>
                    <pre className="bg-gray-200 p-5 rounded-xl w-full">
                        <code>
                            {`//Sample JavaScript Code

const base_url = "http://localhost:8080/onemock";

let fetchRes = fetch(base_url + "/todos/1");
                                
fetchRes
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    });`}
                        </code>
                    </pre>
                </div>
                <div className="flex flex-col py-5 px-12 text-gray-600 w-full">
                    <div className="font-bold text-3xl mb-3 text-end">
                        Considerations
                    </div>
                    <code>
                        <strong>http://localhost:8080/onemock</strong> will be
                        the base endpoint where mock server receives requests.
                        All the paths in the front-end application must prefixed
                        with <strong>"onemock/"</strong> and the best way to do
                        it is as show in the code example.
                    </code>
                    <code className="mt-5">
                        If the path that is called by the front-end application
                        is <strong>/api/users</strong> then it should call the
                        server with{" "}
                        <strong>http://localhost:8080/onemock/api/users</strong>
                    </code>
                    <div className="font-bold text-3xl mb-3 text-end mt-10">
                        Documentation
                    </div>
                    <code>
                        For additional Documentation please visit{" "}
                        <a href="https://github.com/Har-SHAW/One-Mock">
                            https://github.com/Har-SHAW/One-Mock
                        </a>
                    </code>
                </div>
            </div>
        </BodyRoot>
    );
};

HomePageTemplate.propTypes = {};

export default HomePageTemplate;
