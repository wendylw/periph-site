import React from "react";
import PropTypes from "prop-types";
import { View, Image, Navigator } from "@tarojs/components";
import { getClassName } from "@common/utils/ui";
import styles from "./index.module.scss";

const Header = ({ navigators = [] }) => {
  const headerContentClassName = getClassName([
    styles.HeaderContent,
    "tw-mx-auto tw-px-40 sm:tw-px-40px",
  ]);
  const headerLogoFigureClassName = getClassName([
    styles.HeaderLogoFigure,
    "tw-flex tw-items-center tw-px-16 sm:tw-px-16px tw-h-full",
  ]);

  return (
    <View className="tw-hidden sm:tw-block tw-sticky tw-top-0 tw-left-0 tw-w-full tw-z-60 tw-bg-white tw-shadow">
      <div className={headerContentClassName}>
        <figure className={headerLogoFigureClassName}>
          <Image
            className="tw-flex tw-item-center tw-w-full tw-h-full"
            src="https://placehold.co/400x120"
            // image is fit to the container size
            mode="aspectFit"
          />
        </figure>

        <nav className={styles.HeaderNavigation}>
          {navigators.map((navigator) => (
            <Navigator
              key={navigator.key}
              className={styles.HeaderNavigator}
              url={navigator.url}
            >
              {navigator.label}
            </Navigator>
          ))}
        </nav>
      </div>
    </View>
  );
};

Header.displayName = "Header";
Header.propTypes = {
  navigators: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

export default Header;
