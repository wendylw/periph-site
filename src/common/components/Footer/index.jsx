import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, Navigator } from "@tarojs/components";
import styles from "./index.module.scss";

const Footer = ({ medias = [], services = [], companyInfos = [] }) => {
  return (
    <View className={styles.Footer}>
      <View className={styles.FooterTop}>
        <figure>
          <Image
            className="tw-flex tw-item-center tw-w-full tw-h-full"
            src="https://placehold.co/400x120"
            // image is fit to the container size
            mode="aspectFit"
          />
        </figure>
        {medias.map((media) => (
          <Image
            key={media.key}
            className={styles.FooterMedia}
            src={media.src}
            mode="aspectFit"
          />
        ))}
      </View>
      <div>
        <View className={styles.FooterContent}>
          <Text>
            `$place-company` 成立于 20XX 年，是一家专注于 `$place-[行业领域]`
            的领先企业。我们以 `$place-[公司核心理念]` 为宗旨，致力于为客户提供
            `$place-[产品或服务]`。凭借 `$place-[公司优势]`，我们不断推动
            `$place-[行业或领域]` 的进步，为客户、员工和社会创造长期价值。
          </Text>
          <ul>
            <li>
              <h4>服务中心</h4>
              <nav className={styles.FooterNavigation}>
                {services.map((service) => (
                  <Navigator
                    key={service.key}
                    className={styles.FooterNavigator}
                    url={service.url}
                  >
                    {service.label}
                  </Navigator>
                ))}
              </nav>
            </li>
            <li>
              <h4>关于`$place-company`</h4>
              <nav className={styles.FooterNavigation}>
                {companyInfos.map((companyInfo) => (
                  <Navigator
                    key={companyInfo.key}
                    className={styles.FooterNavigator}
                    url={companyInfo.url}
                  >
                    {companyInfo.label}
                  </Navigator>
                ))}
              </nav>
            </li>
            <li>
              <Image
                className={styles.FooterMedia}
                src="https://placehold.co/200x200"
                mode="aspectFit"
              />
              <span>扫码进入小程序</span>
            </li>
          </ul>
        </View>
        <View className={styles.FooterBottom}>
          <Text className="tw-text-center tw-text-sm tw-uppercase">
            `$place-years` `$place-company` Rights Reserved 备案号：`$place-icp`
          </Text>
        </View>
      </div>
    </View>
  );
};

Footer.displayName = "Footer";
Footer.propTypes = {
  medias: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      src: PropTypes.string,
    }),
  ),
  services: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  companyInfos: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

export default Footer;
