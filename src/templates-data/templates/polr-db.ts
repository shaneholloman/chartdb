import { DatabaseType } from '@/lib/domain/database-type';
import type { Template } from '../templates-data';
import image from '@/assets/templates/polr-db.png';
import imageDark from '@/assets/templates/polr-db-dark.png';

const now = Date.now();

export const polrDb: Template = {
    slug: 'polr-database',
    name: 'Polr',
    shortDescription: 'PHP URL shortener',
    description:
        'Self-hostable open-source link shortening web application with a robust API.',
    image,
    imageDark,
    tags: ['MySQL', 'Open Source', 'PHP'],
    featured: false,
    url: 'https://github.com/cydrobolt/polr',
    diagram: {
        id: 'polr_db',
        name: 'polr-database',
        createdAt: new Date(),
        updatedAt: new Date(),
        databaseType: DatabaseType.MYSQL,
        tables: [
            {
                id: '0lsdvj78zgegh2gz9uh7zmx66',
                name: 'clicks',
                schema: 't_polr_db',
                x: 500,
                y: 100,
                fields: [
                    {
                        id: 'kgtm6jaq58t2jkijb00algpc5',
                        name: 'id',
                        type: {
                            id: 'int',
                            name: 'int',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'wh79vs5is2p71qgwfm2q1xjd6',
                        name: 'ip',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'gquejga8shuepyrmt7tg9ybx9',
                        name: 'country',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'da9s0f5bt328v4p62ohs4nodh',
                        name: 'referer',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: '5nkav4n7aj3235dx85c8boh66',
                        name: 'referer_host',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'psglfcj4h46haqwp0ig9bg3gw',
                        name: 'user_agent',
                        type: {
                            id: 'text',
                            name: 'text',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'keznm2av4y80x44f7txhecacu',
                        name: 'link_id',
                        type: {
                            id: 'int',
                            name: 'int',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '361nfo7h72n1os022uddktax9',
                        name: 'created_at',
                        type: {
                            id: 'timestamp',
                            name: 'timestamp',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'nuzr6cqsdhc3wkp1z7ss8oely',
                        name: 'updated_at',
                        type: {
                            id: 'timestamp',
                            name: 'timestamp',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'hk5badxmy74dlokbcr292mvek',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['kgtm6jaq58t2jkijb00algpc5'],
                        createdAt: now,
                    },
                    {
                        id: '4s1inmwhxoeckrcvpei7010tv',
                        name: 'clicks_ip_index',
                        unique: false,
                        fieldIds: ['wh79vs5is2p71qgwfm2q1xjd6'],
                        createdAt: now,
                    },
                    {
                        id: '8hkgarsd8t0swl1decny3iocb',
                        name: 'clicks_referer_host_index',
                        unique: false,
                        fieldIds: ['5nkav4n7aj3235dx85c8boh66'],
                        createdAt: now,
                    },
                    {
                        id: '5lajf33tjvpkth4e3x50qjxu9',
                        name: 'clicks_link_id_index',
                        unique: false,
                        fieldIds: ['keznm2av4y80x44f7txhecacu'],
                        createdAt: now,
                    },
                ],
                color: '#ff6b8a',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'bdray3djsnbwxgo4cias5df53',
                name: 'users',
                schema: 't_polr_db',
                x: -300,
                y: 100.00000000000006,
                fields: [
                    {
                        id: 'rhzuv3cnea9bgbc21p6q77sa1',
                        name: 'id',
                        type: {
                            id: 'int',
                            name: 'int',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'oqakkn270xj3ous3s78ah3k2r',
                        name: 'username',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: true,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'ehpqeqrcgf3lg3iyq9wkqr9ra',
                        name: 'password',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: '32a9b1mna5kp2d4f4mekw630y',
                        name: 'email',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: '94a91jb901wuon0vj1qpi5x3j',
                        name: 'ip',
                        type: {
                            id: 'text',
                            name: 'text',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: '7fv223y9ir0pxkzot925ody5u',
                        name: 'recovery_key',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'ezkw1dmmwrza1r9kwymzralln',
                        name: 'role',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'nq8o8fhdensbp0khdiyby0dht',
                        name: 'active',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'ax306dc8wfnisyz8idb1roafk',
                        name: 'api_key',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: '36urcvljl56r2waz0l25zee40',
                        name: 'api_active',
                        type: {
                            id: 'tinyint',
                            name: 'tinyint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '9bogobkgyc2zx7dnfu7hojotq',
                        name: 'api_quota',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'tlw0deqyvgz6iqk5j7oeux573',
                        name: 'created_at',
                        type: {
                            id: 'timestamp',
                            name: 'timestamp',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'jrr624v76oh62ipfuo4pzckzf',
                        name: 'updated_at',
                        type: {
                            id: 'timestamp',
                            name: 'timestamp',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '2rpset68mf77ydzr7pcpztadm',
                        name: 'deleted_at',
                        type: {
                            id: 'timestamp',
                            name: 'timestamp',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'jrh7z26izbn4b698wzgpjgys1',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['rhzuv3cnea9bgbc21p6q77sa1'],
                        createdAt: now,
                    },
                    {
                        id: 'oz2yv75k3gdg5jj0abijrmnzt',
                        name: 'users_username_unique',
                        unique: true,
                        fieldIds: ['oqakkn270xj3ous3s78ah3k2r'],
                        createdAt: now,
                    },
                ],
                color: '#ff6363',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'bwgql9vythfflx4mhj2og1cwe',
                name: 'links',
                schema: 't_polr_db',
                x: 100,
                y: 100,
                fields: [
                    {
                        id: 'xfjt5ngd1mvl6ybacn9fgvz3d',
                        name: 'id',
                        type: {
                            id: 'int',
                            name: 'int',
                        },
                        primaryKey: true,
                        unique: true,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'lxbxvyd8eav2whky7nl1tjk4l',
                        name: 'short_url',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: true,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'e15aklssal71awtclnll0vfw6',
                        name: 'long_url',
                        type: {
                            id: 'longtext',
                            name: 'longtext',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'vo9iouon6qb05j9bf3qob6fq0',
                        name: 'ip',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'uvgsfa638u0onkfw6gidg6awl',
                        name: 'creator',
                        type: {
                            id: 'int',
                            name: 'int',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'qrbvgyp68h7snowl51i3d93az',
                        name: 'clicks',
                        type: {
                            id: 'int',
                            name: 'int',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'uxuvbw98fuet2ipq77rye955v',
                        name: 'secret_key',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'onqgu3esoe9nzi2d3j59lqu3q',
                        name: 'is_disabled',
                        type: {
                            id: 'tinyint',
                            name: 'tinyint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '2ap7g6l9h6l68airaaf084dgd',
                        name: 'is_custom',
                        type: {
                            id: 'tinyint',
                            name: 'tinyint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: 'vthxy5bw4loh6gq8j85cmtglj',
                        name: 'is_api',
                        type: {
                            id: 'tinyint',
                            name: 'tinyint',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '26n43hbv8cuvfrhrtlkmiqnoy',
                        name: 'created_at',
                        type: {
                            id: 'timestamp',
                            name: 'timestamp',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '1ovgh9c7jh2odcg4w1058jrmp',
                        name: 'updated_at',
                        type: {
                            id: 'timestamp',
                            name: 'timestamp',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                    {
                        id: '9betkha18wdkmnv74u7sxdddt',
                        name: 'long_url_hash',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: true,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                ],
                indexes: [
                    {
                        id: 'jaddak8i90c0b91yr94tie4ti',
                        name: 'PRIMARY',
                        unique: true,
                        fieldIds: ['xfjt5ngd1mvl6ybacn9fgvz3d'],
                        createdAt: now,
                    },
                    {
                        id: 'cx6mwimm49769z1x3i1y4va0v',
                        name: 'links_short_url_unique',
                        unique: true,
                        fieldIds: ['lxbxvyd8eav2whky7nl1tjk4l'],
                        createdAt: now,
                    },
                    {
                        id: 'vcmbt3bmihkqwj02m9wnyduju',
                        name: 'links_creator_is_api_created_at_index',
                        unique: false,
                        fieldIds: [
                            'uvgsfa638u0onkfw6gidg6awl',
                            'vthxy5bw4loh6gq8j85cmtglj',
                            '26n43hbv8cuvfrhrtlkmiqnoy',
                        ],
                        createdAt: now,
                    },
                    {
                        id: 'adp7jzvlcc6oqf5cl8pqoy5he',
                        name: 'links_long_url_hash_index',
                        unique: false,
                        fieldIds: ['9betkha18wdkmnv74u7sxdddt'],
                        createdAt: now,
                    },
                ],
                color: '#8eb7ff',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
            {
                id: 'e4puc5depog884eji5fi2jux7',
                name: 'migrations',
                schema: 't_polr_db',
                x: 102.4822984244671,
                y: -103.44813484708065,
                fields: [
                    {
                        id: 'cem9o4nq35pkolhweoqao0lg1',
                        name: 'migration',
                        type: {
                            id: 'varchar',
                            name: 'varchar',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        collation: 'utf8mb4_0900_ai_ci',
                        createdAt: now,
                    },
                    {
                        id: 'eeq962lch0ycptc6h647rtdd4',
                        name: 'batch',
                        type: {
                            id: 'int',
                            name: 'int',
                        },
                        primaryKey: false,
                        unique: false,
                        nullable: false,
                        createdAt: now,
                    },
                ],
                indexes: [],
                color: '#4dee8a',
                isView: false,
                isMaterializedView: false,
                createdAt: now,
            },
        ],
        relationships: [
            {
                id: 'jqd3pzdzgl37vdbj7tafsvu6p',
                name: 'links_creator_foreign',
                sourceSchema: 't_polr_db',
                targetSchema: 't_polr_db',
                sourceTableId: 'bwgql9vythfflx4mhj2og1cwe',
                targetTableId: 'bdray3djsnbwxgo4cias5df53',
                sourceFieldId: 'uvgsfa638u0onkfw6gidg6awl',
                targetFieldId: 'rhzuv3cnea9bgbc21p6q77sa1',
                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
            {
                id: 'm6tzl115376nbia481mnzsuym',
                name: 'clicks_link_id_foreign',
                sourceSchema: 't_polr_db',
                targetSchema: 't_polr_db',
                sourceTableId: '0lsdvj78zgegh2gz9uh7zmx66',
                targetTableId: 'bwgql9vythfflx4mhj2og1cwe',
                sourceFieldId: 'keznm2av4y80x44f7txhecacu',
                targetFieldId: 'xfjt5ngd1mvl6ybacn9fgvz3d',
                sourceCardinality: 'many',
                targetCardinality: 'one',
                createdAt: now,
            },
        ],
        dependencies: [],
    },
};
