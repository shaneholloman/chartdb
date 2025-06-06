import { DatabaseType } from '@/lib/domain/database-type';
import type { Template } from '../templates-data';
import image from '@/assets/templates/employeedb.png';
import imageDark from '@/assets/templates/employeedb-dark.png';

const now = Date.now();

export const employeeDb: Template = {
    slug: 'employees-database',
    name: 'Employees',
    shortDescription: 'Employees, departments, and salaries',
    description:
        'A schema for database of employees, departments, and salaries.',
    image,
    imageDark,
    tags: ['MySQL'],
    featured: true,
    diagram: {
        id: 'employees_db',
        name: 'employees-database',
        createdAt: new Date(),
        updatedAt: new Date(),
        databaseType: DatabaseType.MYSQL,
        tables: [
            {
                id: '6e70s6dhdfnve9xljbih6bo7x',
                name: 'departments',
                x: 488.2056573620456,
                y: -116.26128764468365,
                fields: [
                    {
                        id: 'gaj3scrtaz46ezfmc162ingxf',
                        name: 'dept_no',
                        type: { id: 'char', name: 'char' },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        characterMaximumLength: '4',
                        collation: 'utf8mb4_general_ci',
                        createdAt: now,
                    },
                    {
                        id: 'pb0j4xvevy9dics5euelx7ay9',
                        name: 'dept_name',
                        type: { id: 'varchar', name: 'varchar' },
                        primaryKey: false,
                        unique: true,
                        nullable: false,
                        characterMaximumLength: '40',
                        collation: 'utf8mb4_general_ci',
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: '87iu197demih0wymjooqm9dmh',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['gaj3scrtaz46ezfmc162ingxf'],
                        createdAt: now,
                    },
                    {
                        id: 'ltt6su8loqpf29ok7okzqblg2',
                        name: 'dept_name',
                        unique: true,
                        fieldIds: ['pb0j4xvevy9dics5euelx7ay9'],
                        createdAt: now,
                    },
                ],
                color: '#b067e9',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'rkc38w1yqrvhz2pmveunp6nsw',
                name: 'dept_emp',
                x: 809.6786878331093,
                y: 13.918352368775231,
                fields: [
                    {
                        id: 'wcgycjif09xrq0ly3txkq6ocu',
                        name: 'emp_no',
                        type: { id: 'int', name: 'int' },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'jdw1yrh9xf1i7927gzs9pob2p',
                        name: 'dept_no',
                        type: { id: 'char', name: 'char' },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        characterMaximumLength: '4',
                        collation: 'utf8mb4_general_ci',
                        createdAt: now,
                    },
                    {
                        id: 'm3zu12iy2jmfraliisks0rqcv',
                        name: 'from_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'yq4k0bqt39aap0956aejicud4',
                        name: 'to_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'rqb91465yc51xpvd54o5a8d0l',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['wcgycjif09xrq0ly3txkq6ocu'],
                        createdAt: now,
                    },
                    {
                        id: '8wh6op49abv143qdfjzm211xj',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['jdw1yrh9xf1i7927gzs9pob2p'],
                        createdAt: now,
                    },
                    {
                        id: 'iw9hjbmuchq0jisgd8zb13qy6',
                        name: 'dept_no',
                        unique: false,
                        fieldIds: ['jdw1yrh9xf1i7927gzs9pob2p'],
                        createdAt: now,
                    },
                ],
                color: '#8a61f5',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'd2xqiqlffjfsg3kgsmpck5xay',
                name: 'dept_manager',
                x: -248.93599999999998,
                y: -84.16474999999997,
                fields: [
                    {
                        id: 'ecx2zbzdc5o54e04aeg7tlg54',
                        name: 'emp_no',
                        type: { id: 'int', name: 'int' },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'v8plj7wq1cly03y178bysft2f',
                        name: 'dept_no',
                        type: { id: 'char', name: 'char' },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        characterMaximumLength: '4',
                        collation: 'utf8mb4_general_ci',
                        createdAt: now,
                    },
                    {
                        id: '3u0rfkvw0yokndqhfqx0nuzpi',
                        name: 'from_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'xrcw2488t50shssn4vn3n6vad',
                        name: 'to_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'cbahnbrxaaj7cg29act50izy4',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['ecx2zbzdc5o54e04aeg7tlg54'],
                        createdAt: now,
                    },
                    {
                        id: 'vgxv8rkf4890yf659o2oklffv',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['v8plj7wq1cly03y178bysft2f'],
                        createdAt: now,
                    },
                    {
                        id: '60gtoaq9vnwwbii97ks47ph82',
                        name: 'dept_no',
                        unique: false,
                        fieldIds: ['v8plj7wq1cly03y178bysft2f'],
                        createdAt: now,
                    },
                ],
                color: '#ff6363',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: '1c03hu41ko98myywerwbazeli',
                name: 'employees',
                x: 82.72000000000003,
                y: 98.27199999999999,
                fields: [
                    {
                        id: '04csyx8ds9t3rh93txiqs4dm4',
                        name: 'emp_no',
                        type: { id: 'int', name: 'int' },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'gnvcnj2i5jgktg7vauhveaorb',
                        name: 'birth_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '8savn7ht0fogo4odxdhekrret',
                        name: 'first_name',
                        type: { id: 'varchar', name: 'varchar' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        characterMaximumLength: '14',
                        collation: 'utf8mb4_general_ci',
                        createdAt: now,
                    },
                    {
                        id: 'ol8kezsspmjx25avlf2dvic5q',
                        name: 'last_name',
                        type: { id: 'varchar', name: 'varchar' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        characterMaximumLength: '16',
                        collation: 'utf8mb4_general_ci',
                        createdAt: now,
                    },
                    {
                        id: 'jga5lfkkoxueqslcljj2vng9q',
                        name: 'gender',
                        type: { id: 'enum', name: 'enum' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        characterMaximumLength: '1',
                        collation: 'utf8mb4_general_ci',
                        createdAt: now,
                    },
                    {
                        id: 'i0kgsun3nzrjpaz8ykwjgogyb',
                        name: 'hire_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: '8zg1ccoj4jb4kv6eleih38ni5',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['04csyx8ds9t3rh93txiqs4dm4'],
                        createdAt: now,
                    },
                ],
                color: '#4dee8a',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'u97myqcs1osilg7x0v263qpzd',
                name: 'salaries',
                x: 493.50755288021537,
                y: 227.8719999999999,
                fields: [
                    {
                        id: 'b8c9v5vtpbnt5tjzcd3iat85f',
                        name: 'emp_no',
                        type: { id: 'int', name: 'int' },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'n654h28i8yeeadznzht9mjc8f',
                        name: 'salary',
                        type: { id: 'int', name: 'int' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '0s10erufqpl6y3hpqmvbcneol',
                        name: 'from_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'bwohji7dj67xpa6p5diyy6pis',
                        name: 'to_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'orkgizf8qbmtly3rw5cbxtc2i',
                        name: 'price',
                        type: { id: 'decimal', name: 'decimal' },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        precision: 10,
                        scale: 2,
                        default: '13.21',
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'nky2wepp8yr5g6rzvnbta1hxb',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['b8c9v5vtpbnt5tjzcd3iat85f'],
                        createdAt: now,
                    },
                    {
                        id: 'w40nnsrsnlz7z7vycs4yf0s8d',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['0s10erufqpl6y3hpqmvbcneol'],
                        createdAt: now,
                    },
                ],
                color: '#ff6b8a',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'fa0ozznyrckx572fqztyw3w4z',
                name: 'titles',
                x: -251.04799999999966,
                y: 220.9599999999999,
                fields: [
                    {
                        id: 'hr2gdoc0wtwvs4pfqo6m0fwc3',
                        name: 'emp_no',
                        type: { id: 'int', name: 'int' },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '5evr59tury66sayiu59esoc61',
                        name: 'title',
                        type: { id: 'varchar', name: 'varchar' },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        characterMaximumLength: '50',
                        collation: 'utf8mb4_general_ci',
                        createdAt: now,
                    },
                    {
                        id: '0vs1nqvrb6t53niz5ns2eskre',
                        name: 'from_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'n6csxwmdm60y920p5jovlx4c6',
                        name: 'to_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        default: 'NULL',
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'ijhmb7tq6i4fd72ndvotnwo45',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['hr2gdoc0wtwvs4pfqo6m0fwc3'],
                        createdAt: now,
                    },
                    {
                        id: 'wgneqfte0nq7d5vzed2hcqie6',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['5evr59tury66sayiu59esoc61'],
                        createdAt: now,
                    },
                    {
                        id: 'jbe9t9adhluqy8d3i7w1vgygd',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['0vs1nqvrb6t53niz5ns2eskre'],
                        createdAt: now,
                    },
                ],
                color: '#b067e9',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'gq5r3cuh74h1xzgzjmiu26t1e',
                name: 'current_dept_emp',
                x: 393.01599999999996,
                y: 488.65600000000006,
                fields: [
                    {
                        id: '8tz9jdtfrbbl4c0e7nthrj90g',
                        name: 'emp_no',
                        type: { id: 'int', name: 'int' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'fv7o6txqvmy2349aq3pg0hnkm',
                        name: 'dept_no',
                        type: { id: 'char', name: 'char' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        characterMaximumLength: '4',
                        collation: 'utf8mb4_general_ci',
                        createdAt: now,
                    },
                    {
                        id: 'hneqjqobdvcumv91ymvqhv42a',
                        name: 'from_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'n9yj0xtw6uu0aqn2ankvniuat',
                        name: 'to_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [],
                color: '#b0b0b0',
                isView: true,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'q248uisjcid20tdqfnbj5qec6',
                name: 'dept_emp_latest_date',
                x: 70.62399999999991,
                y: 469.6479999999999,
                fields: [
                    {
                        id: 'q3oiwd0p27bipsy4kg5dkxri0',
                        name: 'emp_no',
                        type: { id: 'int', name: 'int' },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'dxhqoscu6zk87ob7sfvxo7if4',
                        name: 'from_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                    {
                        id: 'ys76pzey5i9twf13g2g0taju7',
                        name: 'to_date',
                        type: { id: 'date', name: 'date' },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [],
                color: '#b0b0b0',
                isView: true,
                isMaterializedView: false,
                createdAt: now,
            },
        ],
        relationships: [
            {
                id: 'cciaonuhfnjdvntl9gv4lrsbk',
                name: 'dept_emp_ibfk_1',
                sourceTableId: 'rkc38w1yqrvhz2pmveunp6nsw',
                targetTableId: '1c03hu41ko98myywerwbazeli',
                sourceFieldId: 'wcgycjif09xrq0ly3txkq6ocu',
                targetFieldId: '04csyx8ds9t3rh93txiqs4dm4',

                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
            {
                id: 'b9y9q200df95qtzdi4lkeiw2w',
                name: 'dept_emp_ibfk_2',
                sourceTableId: 'rkc38w1yqrvhz2pmveunp6nsw',
                targetTableId: '6e70s6dhdfnve9xljbih6bo7x',
                sourceFieldId: 'jdw1yrh9xf1i7927gzs9pob2p',
                targetFieldId: 'gaj3scrtaz46ezfmc162ingxf',

                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
            {
                id: 'tt4jz3plk26zz3p8hvu3e4m27',
                name: 'dept_manager_ibfk_1',
                sourceTableId: 'd2xqiqlffjfsg3kgsmpck5xay',
                targetTableId: '1c03hu41ko98myywerwbazeli',
                sourceFieldId: 'ecx2zbzdc5o54e04aeg7tlg54',
                targetFieldId: '04csyx8ds9t3rh93txiqs4dm4',

                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
            {
                id: 'y3p9kp0rcfle3ivoe2owx7tu3',
                name: 'dept_manager_ibfk_2',
                sourceTableId: 'd2xqiqlffjfsg3kgsmpck5xay',
                targetTableId: '6e70s6dhdfnve9xljbih6bo7x',
                sourceFieldId: 'v8plj7wq1cly03y178bysft2f',
                targetFieldId: 'gaj3scrtaz46ezfmc162ingxf',

                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
            {
                id: 'imavnkr77bjlanlaxj3og9fh6',
                name: 'salaries_ibfk_1',
                sourceTableId: 'u97myqcs1osilg7x0v263qpzd',
                targetTableId: '1c03hu41ko98myywerwbazeli',
                sourceFieldId: 'b8c9v5vtpbnt5tjzcd3iat85f',
                targetFieldId: '04csyx8ds9t3rh93txiqs4dm4',

                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
            {
                id: 'x4m88eqis6owszjfozerntmzt',
                name: 'titles_ibfk_1',
                sourceTableId: 'fa0ozznyrckx572fqztyw3w4z',
                targetTableId: '1c03hu41ko98myywerwbazeli',
                sourceFieldId: 'hr2gdoc0wtwvs4pfqo6m0fwc3',
                targetFieldId: '04csyx8ds9t3rh93txiqs4dm4',

                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
        ],
    },
};
