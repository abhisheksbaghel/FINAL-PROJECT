package com.fitbuddy.Model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@IdClass(DailyActivityId.class)
public class DailyActivity {

    @Id
    private int id;

    @Id
    private String date;

    
    private float dailyBurn;

    
    private float dailyIntake;
}
