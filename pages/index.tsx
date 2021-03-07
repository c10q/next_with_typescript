import * as React from "react";
import Link from "next/link";

const Index: React.FunctionComponent = () => {
    return (
        <div>
            <p>Welcome</p>
            <Link href="/posts">
                <a>Posts</a>
            </Link>
        </div>
    );
};

export default Index;