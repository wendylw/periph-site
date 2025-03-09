import React from "react";
import PropTypes from "prop-types";
import { View, Image, Navigator, Button, Text } from "@tarojs/components";
import { UserCircle, CaretDown } from "@phosphor-icons/react";
import { getClassName } from "@common/utils/ui";
import styles from "./index.module.scss";

const Header = ({
  navigators = [],
  isLogin = false,
  userName = "Samuel",
  userAvatar = null,
  userNavigators = [],
  onLoginButtonClick = () => {},
}) => {
  const headerContentClassName = getClassName([
    styles.HeaderContent,
    "tw-flex tw-justify-between tw-items-center tw-mx-auto",
  ]);
  const headerLogoFigureClassName = getClassName([
    styles.HeaderLogoFigure,
    "tw-flex tw-items-center tw-px-16 sm:tw-px-16px tw-h-full",
  ]);

  return (
    <View className="tw-hidden md:tw-block tw-sticky tw-top-0 tw-left-0 tw-w-full tw-z-60 tw-bg-white tw-shadow-sm">
      <div className={headerContentClassName}>
        <figure className={headerLogoFigureClassName}>
          <Image
            className="tw-flex tw-item-center tw-w-full tw-h-full"
            src="https://placehold.co/400x120"
            mode="aspectFit"
          />
        </figure>

        <div className="tw-flex tw-items-center">
          <nav className="tw-flex tw-items-center tw-h-full">
            {navigators.map((navigator) => (
              <Navigator
                key={navigator.key}
                className="tw-flex tw-justify-center tw-px-16 sm:tw-px-16px tw-items-center tw-text-base tw-h-full"
                url={navigator.url}
              >
                {navigator.label}
              </Navigator>
            ))}
          </nav>

          <View>
            {!isLogin ? (
              <>
                <Button
                  className={styles.HeaderLoginButton}
                  plain
                  onClick={onLoginButtonClick}
                >
                  <UserCircle size={24} />
                  <Text>{userName}</Text>
                  <CaretDown size={18} />
                </Button>
                <nav>
                  {userNavigators.map((userNavigator) => (
                    <Navigator key={userNavigator.key} url={userNavigator.url}>
                      {userNavigator.url}
                    </Navigator>
                  ))}
                </nav>
              </>
            ) : (
              <Button
                className={styles.HeaderLoginButton}
                plain
                onClick={onLoginButtonClick}
              >
                <UserCircle size={24} />
              </Button>
            )}
          </View>
        </div>
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
  isLogin: PropTypes.bool,
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
  userNavigators: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  onLoginButtonClick: PropTypes.func,
};

export default Header;
