import * as React from "react";


class SvgComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path1y: Infinity,
      path2y: Infinity,
      path3y: Infinity,
      shouldpath1start: true,
      shouldpath2start: false,
      shouldpath3start: false,
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    const path1y = document
      .getElementById("animatepath1")
      .getBoundingClientRect().y;
    const path2y = document
      .getElementById("animatepath2")
      .getBoundingClientRect().y;
    const path3y = document
      .getElementById("animatepath3")
      .getBoundingClientRect().y;
    this.setState({ path1y: path1y, path2y: path2y, path3y: path3y });
    this.onScroll();
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  onScroll = () => {
    const windowLocation = window.scrollY + window.innerHeight;


    if (this.state.path1y <= windowLocation && this.state.shouldpath1start) {
      this.setState({ shouldpath1start: false });
      const anim1 = document.getElementById("anim1");
      anim1.beginElement();
      anim1.onend = () => {
        this.setState({ shouldpath2start: true });
        window.scrollBy(0, 1);
      };
    }
    if (this.state.path2y <= windowLocation && this.state.shouldpath2start) {
      const anim2 = document.getElementById("anim2");
      anim2.beginElement();
      this.setState({ shouldpath2start: false });
      anim2.onend = () => {
        this.setState({ shouldpath3start: true });
        window.scrollBy(0, 1);
      };
    }
    if (this.state.path3y <= windowLocation && this.state.shouldpath3start) {
     const anim3=  document.getElementById("anim3");
     anim3.beginElement();
      this.setState({ shouldpath3start: false });
      anim3.onend = () => {
        this.setState({ shouldpath1start: true });
        window.scrollBy(0, 1);
      };
    }
  };
  render() {
    return (
      <svg width={"100%"} viewBox="0 0 1920.73 4907" {...this.props}>
        <g id="homepageanimation__Layer_2" data-name="Layer 2">
          <g id="homepageanimation__Layer_1-2" data-name="Layer 1">
            <path fill="none" d="M.73 0h1920v5557.44H.73z" />
            <g id="homepageanimation__animationgroup">
              <circle id="homepageanimation__circle1" cx={0} cy={0} r={9.1} fill="red">
                <animateMotion
                  begin="indefinite"
                  dur="10s"
                  repeatCount="1"
                  id="anim1"
                >
                  <mpath xlinkHref="#animatepath1"></mpath>
                </animateMotion>
              </circle>
              <circle id="homepageanimation__circle2" cx={0} cy={0} r={9.1} fill="red">
                <animateMotion
                  begin="indefinite"
                  dur="10s"
                  repeatCount="1"
                  id="anim2"
                >
                  <mpath xlinkHref="#animatepath2"></mpath>
                </animateMotion>
              </circle>
              <circle id="homepageanimation__circle3" cx={0} cy={0} r={9.1} fill="red">
                <animateMotion
                  begin="indefinite"
                  dur="8s"
                  repeatCount="1"
                  id="anim3"
                >
                  <mpath xlinkHref="#animatepath3"></mpath>
                </animateMotion>
              </circle>
              <path
                id="animatepath1"
                d="M935.37 1116.23v107.68h465.21l2.21 227.32h-248.4l-3 283.76-154.31 2.55-.48 252a30.28 30.28 0 006.62-1.08 25.37 25.37 0 004.08-1.28c1-.41 6.24-3.26 6.71-3.67s154.24-88.74 154.24-88.74 12.42-8.79 25.29-7.81 24.13 8.25 24.13 8.25l76.69 44.28s7.92 4.63 8 11a10.84 10.84 0 01-4.6 9.24l-272.08 157.52s-14.15 9.43-26.78 11.94-24.2-4.46-24.2-4.46l-130.1-75.22s-12.81-9.11-18.7-10.14-8.94-1.74-16.2-.75-16.87 7.1-16.87 7.1l-107.07 61.82s-5.64 3.14-6.6 7.93 4.9 9.23 4.9 9.23l136.08 79.09.48 379.12a28.32 28.32 0 00-8.09.92 47.64 47.64 0 00-12.61 6C795.63 2592.7 536.19 2742 536.19 2742l-7.74 4.68a9.5 9.5 0 00-3.38 4.46c-1 2.86 1 6 1 6a15.77 15.77 0 002.75 2.78c1.26.86 6.29 3.78 6.29 3.78l154.36 89.11s8.53 3.88 10.07 9-.13 7.25-2.41 10.25-153.23 89.61-153.23 89.61"
                fill="none"
                strokeMiterlimit={10}
              />
              <path
                id="animatepath2"
                d="M1579.16 3008.5l-237.57-138.64s-8.35-5.16-11.8-6.15-10-2.21-13.24-2.09-9.61.68-12.92 2-16.61 8.86-16.61 8.86l-211.53 122.12s-2.93 2.33-10.06 5.28a31.59 31.59 0 01-14.32 2s-8.23.06-14.4-3.48-14.57-8.37-14.57-8.37l-148.28-85.61s-9.94-4.84-15.26-5.08-10-.18-13 .52-3 .4-5.84 1.62-7.63 3.94-7.63 3.94l-74.5 43s-6.19 3.25-8 4.83-4.38 4.34-4.88 6.18-1 5 0 7.07a14 14 0 004.35 5.75c2.25 1.62 7.55 4.66 7.55 4.66l204.08 116.49a48.25 48.25 0 0021.38 6.11c12.12.43 19.67-5.13 19.67-5.13l65.22-37.68 121-69.82 22.64-13.05s8.54-4.35 17.89-3.56a43.32 43.32 0 0115.43 4l55.19 31.87 57.33 33.09s8.42 4.57 7.29 9.88a11.59 11.59 0 01-4.72 7.44L1079.2 3218.3l1.61 433.4-1 78.12 24 23.14 92.08-55.35-64.7-38.1s-7.08-4.07-5.75-9 8.5-8.45 8.5-8.45l90.63-52.27s9.68-4.29 17.63-2.8 10 2.69 10 2.69l277.07 159.92s6.26 3.46 5.12 8.08-5 6.87-8.93 9.17l-172.67 100.68s-5.32 3.14-6 7.32.55 6.64 1.45 7.8a24.49 24.49 0 005.61 4.85l66.27 38.27"
                fill="none"
                strokeMiterlimit={10}
              />
              <path
                id="animatepath3"
                d="M.25 4242.08l420.38-240.42a30.44 30.44 0 0117.64-4.08c10.08.86 14 2.61 18.21 5.05l226.68 130.87s5.59 3.37 15.5 4.3a40.86 40.86 0 0018.19-2.7l142.26-82 25.65-14.74a29.72 29.72 0 0110.3-3c6.65-.84 13.19 0 16.52 1.23s13.9 7.12 13.9 7.12l76.15 44s4.77 2.94 5.63 6.45-2.37 9.06-6.08 11.21L719.58 4268a25.79 25.79 0 01-14.24 4.46c-8.18-.05-12 1.22-20.9-3.9L478.07 4149.4s-9.75-5.83-17.22-5.88-15.48.31-21.19 3.56-114.34 66-114.34 66-4.91 3.1-6.12 5.47a12.7 12.7 0 00-1.86 8.34c.33 4.32 6.35 7.83 6.35 7.83l231.38 133.68-183.51 107.72v210.94s2.05 21.43 12.63 28 10.28 9.43 30 9.43h198.08"
                fill="none"
                strokeMiterlimit={10}
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default SvgComponent;
