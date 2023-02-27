export type Personal = {
   prefix: string;
   firstname: string;
   middlename: string;
   surname: string;
   nickname: string;
   birth_date: string;
   mobile: string;
   email: string;
   province: string;
   travelby: string;
   shirt_size: string;
   medicine: string;
   underlying: string;
   allergic_food: string;
   allergic_medicine: string;
   special: string;
   notebook: boolean;
};

export interface Education {
   school_name: string;
   school_province: string;
   study_plan: string;
   student_level: string;
   gpax: string;
   university_1: string;
   faculty_1: string;
   major_1: string;
   university_2: string;
   faculty_2: string;
   major_2: string;
   university_3: string;
   faculty_3: string;
   major_3: string;
}
export interface Interest {
   comcamp_previous: boolean;
   major_interest: string;
   reason_major_interest: string;
   camp_1: string;
   camp1_by: string;
   camp_2: string;
   camp2_by: string;
   no_previous_camp: boolean;
}
export interface ParentData {
   parent_prefix: string;
   parent_firstname: string;
   parent_middlename: string;
   parent_surname: string;
   parent_relation: string;
   parent_mobile: string;
   parent_email: string;
   same_parent: boolean;
   emergency_prefix: string;
   emergency_firstname: string;
   emergency_middlename: string;
   emergency_surname: string;
   emergency_relation: string;
   emergency_mobile: string;
   emergency_email: string;
}
export interface UploadFile {
   image_URL: string;
   image_Name: string;
   agreement_URL: string;
   agreement_Name: string;
   card_URL: string;
   card_Name: string;
   pp7_URL: string;
   pp7_Name: string;
   pp1_URL: string;
   pp1_Name: string;
}

export interface QuestionPage1 {
   q1: string;
   q2: string;
   q3: string;
}
export interface QuestionPage2 {
   q4: string;
   q5: string;
   q6: string;
   q7: string;
}

export interface DateForm {
   day: string;
   month: string;
   year: string;
}
