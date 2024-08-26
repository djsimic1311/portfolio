import { throttle } from "lodash";
import { useEffect } from "react";

export const useHeader: Function = (setHeaderHeight: React.Dispatch<React.SetStateAction<number>>, headerContainerRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
		setHeaderHeight(headerContainerRef.current?.offsetHeight || 0);
		let lastScrollTop: number = 0;
		window.addEventListener(
			"scroll",
			throttle(
				() => {
					let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
					if (st > lastScrollTop) {
						headerContainerRef.current?.classList.add("hide");
					} else if (st < lastScrollTop) {
						headerContainerRef.current?.classList.remove("hide");
					}
					lastScrollTop = st <= 0 ? 0 : st;
				},
				200
			),
			false
		);
		window.addEventListener(
			"resize",
			throttle(() => {
        setHeaderHeight(headerContainerRef.current?.offsetHeight || 0)
      }, 200)
		);
		return () => {
			window.removeEventListener(
				"scroll",
				throttle(
					() => {
						let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
						if (st > lastScrollTop) {
							headerContainerRef.current?.classList.add("hide");
						} else if (st < lastScrollTop) {
							headerContainerRef.current?.classList.remove("hide");
						}
						lastScrollTop = st <= 0 ? 0 : st;
					},
					200
				),
				false
			);
      window.removeEventListener(
        "resize",
        throttle(() => {
          setHeaderHeight(headerContainerRef.current?.offsetHeight || 0)
        }, 200)
      );
		};
	}, []);
}