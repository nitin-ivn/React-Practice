function customRender(reactElement, container){
    let domElement = document.createElement(reactElement.type);
    for(const prop in reactElement.props){
        if(prop === "child") continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    domElement.innerHTML = reactElement.children;
    container.appendChild(domElement);
}


const reactElement = {
    type: "h1",
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "lol"
}

let mainContainer =  document.getElementById("root");

customRender(reactElement, mainContainer);