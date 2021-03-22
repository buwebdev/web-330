function isInRange(empId)
{
    const validEmpIds = [1007, 1008, 1009, 1010, 1011, 1012];

    try
    {
        for (const id of validEmpIds)
        {
            if (id === parseInt(empId))
            {
                return true;
            }
        }
        return false;
    }
    catch (err)
    {
        return false;
    }
}

function isNum(val)
{
    return parseInt(val) || 0;
}
