package com.chosensolutions.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;

//@Configuration
public class PersistenceConfig {

/*    @Bean
    @ConfigurationProperties(prefix = "spring.datasource")
    @Primary
    static DataSource dataSource() {
        return DataSourceBuilder.create().build();
    }*/
}
