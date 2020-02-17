function StrToInt(str)
{
    if(str==='-2147483649') return 0
    else if(str==='2147483648') return 0
    return +str !== +str ? 0 : +str;
}