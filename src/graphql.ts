
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class skillFilter {
    skillsId?: Nullable<string>;
}

export class employeeDto {
    name?: Nullable<string>;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    DOJ?: Nullable<DateTime>;
    DOB?: Nullable<DateTime>;
    skillsId?: Nullable<string[]>;
}

export class tagsDto {
    name?: Nullable<string>;
}

export class skillsDto {
    name?: Nullable<string>;
    tagsId?: Nullable<string[]>;
}

export class tagsModel {
    id?: Nullable<string>;
    name?: Nullable<string>;
    employeeCount?: Nullable<number>;
}

export class skillsModel {
    id?: Nullable<string>;
    name?: Nullable<string>;
    tags?: Nullable<tagsModel[]>;
    employeeCount?: Nullable<number>;
}

export class employeeModel {
    id?: Nullable<string>;
    name?: Nullable<string>;
    phone?: Nullable<string>;
    email?: Nullable<string>;
    DOJ?: Nullable<DateTime>;
    DOB?: Nullable<DateTime>;
    age?: Nullable<number>;
    skills?: Nullable<skillsModel[]>;
    tags?: Nullable<tagsModel[]>;
}

export abstract class IQuery {
    getEmployee?: employeeModel;
    getemployee?: employeeModel[];
    getemployeecount: number;
    skillCount: skillsModel[];
    tagCount: skillsModel[];
    gettags: tagsModel[];
    getskills: skillsModel[];
}

export abstract class IMutation {
    createemployee?: employeeModel;
    updateemployee?: employeeModel;
    deleteemployee?: employeeModel;
    createtags?: tagsModel;
    updatetags?: tagsModel;
    deletetags?: tagsModel;
    createskills?: skillsModel;
    updateskills?: skillsModel;
    deleteSkill?: skillsModel;
}

export type DateTime = any;
type Nullable<T> = T | null;
